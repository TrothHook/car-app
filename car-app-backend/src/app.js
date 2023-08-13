const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const carRoute = require("./api/router/carRoute");

const app = express();

process.env.NODE_ENV === "development" && app.use(morgan("dev"));

app.use(cors());
app.use(helmet());

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

app.use("/api/v1", carRoute);

module.exports = app;
