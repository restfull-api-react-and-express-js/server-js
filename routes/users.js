const express = require("express");
const router = express.Router();
const { all } = require("../controllers/UsersController");

router.get("/", all);

module.exports = router;
