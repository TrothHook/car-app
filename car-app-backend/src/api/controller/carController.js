const ResponseService = require("../../common-service/response.service");
const connect = require("../../database/connect");

const responseService = new ResponseService();

const addCars = async (req, res) => {
  try {
    const db = await connect();

    await db.collection("cars").insertMany(req.body);

    return responseService.sent(res, 201, [], "Successfully inserted");
  } catch (error) {
    console.log("errorPart", error);
    return responseService.sent(res, 500, error);
  }
};

const carListing = async (req, res) => {
  try {
    const db = await connect();
    let whereCondition = {};
    let customFilter = req.query.custom_filter || null || undefined;
    if (customFilter) {
      whereCondition = { $and: [] };
      parsedFilter = JSON.parse(customFilter);
      Object.keys(parsedFilter).forEach((item) => {
        switch (item) {
          case "Origin":
            whereCondition["$and"].push({ Origin: parsedFilter[item] });
            break;
          case "Miles_per_Gallon":
            whereCondition["$and"].push({
              Miles_per_Gallon: +parsedFilter[item],
            });
            break;
          default:
            break;
        }
      });
    }
    const pipeline = [
      {
        $match: whereCondition,
      },
      {
        $project: {
          label: {
            $concat: [
              { $toUpper: { $substrCP: ["$Name", 0, 1] } },
              { $substrCP: ["$Name", 1, { $strLenCP: "$Name" }] },
            ],
          },
          value: {
            $dateToString: {
              format: "%d-%m-%Y",
              date: { $toDate: "$Year" },
            },
          },
          _id: 0,
        },
      },
    ];
    const carsList = await db.collection("cars").aggregate(pipeline).toArray();
    return responseService.sent(res, 200, carsList);
  } catch (error) {
    console.log("errorPart", error);
    return responseService.sent(res, 500, error);
  }
};

const carController = {
  addCars,
  carListing,
};

module.exports = carController;