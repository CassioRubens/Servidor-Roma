"user strict";

const express = require("express");
const router = express.Router();
const file = require("../controllers/file-controller");
const authService = require('../services/auth-service');

router.post("/send/:title/:id", file.uploadFile);
router.post("/", file.post);
router.get("/", file.listFiles);
router.get('/download/:id', file.getFile);

module.exports = router;
