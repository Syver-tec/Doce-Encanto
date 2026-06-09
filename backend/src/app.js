const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const productRoutes = require("./routes/productRoutes");
const app = express();

const orderRoutes = require("./routes/orderRoutes");

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/products", productRoutes);

app.use("/orders", orderRoutes);

module.exports = app;
