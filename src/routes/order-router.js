"user strict";

const express = require("express");
const router = express.Router();
const order = require("../controllers/order-controller");
const authService = require('../services/auth-service');

router.get("/", authService.authorize, order.listOrders);
router.post("/", authService.authorize, order.post);

module.exports = router;
