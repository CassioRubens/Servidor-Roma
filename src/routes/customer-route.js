"user strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/costumer-controller");

router.get("/", controller.listCustomers);
router.get("/users", controller.listUsers);
router.get("/gerentes", controller.listGerentes);
router.get("/funcionarios/:id", controller.listFuncionarios);
router.get("/user/:id", controller.getUserById);
router.post("/userComum/:id", controller.postUsuarioComum);
router.post("/autenticate", controller.autenticate);
router.get('/files/:id', controller.listFilers);
router.post('/admin', controller.postAdm);
router.post('/client', controller.postClient);

module.exports = router;    
