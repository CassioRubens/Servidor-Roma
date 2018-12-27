"user strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/costumer-controller");

router.get("/", controller.listCustomers);
router.get("/users", controller.listUsers);
router.post("/", controller.post);
router.post("/autenticate", controller.autenticate);
router.get('/files/:id', controller.listFilers);

module.exports = router;
