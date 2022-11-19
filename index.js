const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

const router = require("./src/routes/api");
const path = require("path");

// middlewares
app.use(helmet());

app.use(express.json({ limit: "200mb" }));

app.use(express.urlencoded({ limit: "200mb", extended: true }));

app.use(morgan("dev"));
app.use(cors());

// DB Connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("DB Error => ", err));

// routes middleware
app.use(router);

// server
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`App is  running on port ${port}`);
});
