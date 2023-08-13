const express = require("express");
const carController = require("../controller/carController");

const router = express.Router();

router.post("/car/add-car", carController.addCars);

router.get("/car/cars-list", carController.carListing);

module.exports = router;
