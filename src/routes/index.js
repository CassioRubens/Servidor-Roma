"user strict";

const express = require("express");
const router = express.Router();

route = router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "Node Store app",
    version: "0.0.1"
  });
});

module.exports = router;
