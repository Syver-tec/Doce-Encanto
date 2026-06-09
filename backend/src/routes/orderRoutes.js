const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const orderController = require("../controllers/orderController");

router.get("/my-orders", authMiddleware, orderController.getMyOrders);

router.post("/", authMiddleware, orderController.createOrder);

router.put("/cancel/:id", authMiddleware, orderController.cancelOrder);

module.exports = router;
