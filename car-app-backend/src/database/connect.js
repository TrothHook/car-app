const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");

dotenv.config({ path: "src/.env" });

const connect = async () => {
  try {
    const client = await MongoClient.connect(process.env.CONNECTION_STRING, {
      useUnifiedTopology: true,
    });
    console.log("connected to the database");
    const db = client.db(process.env.DATABASE);
    return db;
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
