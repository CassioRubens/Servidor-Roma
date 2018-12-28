"user strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/costumer-controller");

router.get("/", controller.listCustomers);
router.get("/users", controller.listUsers);
router.get("/user/:id", controller.getUserById);
router.post("/", controller.post);
router.post("/autenticate", controller.autenticate);
router.get('/files/:id', controller.listFilers);
router.post('/admin', controller.postAdm);
module.exports = router;
