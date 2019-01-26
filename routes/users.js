const express = require("express");
const router = express.Router();
const { all, find } = require("../controllers/UsersController");

router.get("/", all);
router.get("/:id", find);

module.exports = router;
