const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const path = require('path');
const personalRoutes = require("./router/personal.routes");

const discountRoutes = require("./router/discount.routes");

const productRoutes = require("./router/product.router");

require("dotenv").config();
app.set("port", process.env.PORT);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
app.set("json spaces", 4);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/personal",personalRoutes);

app.use("/api/discount",discountRoutes);

app.use("/api/product",productRoutes);

module.exports = app;
 