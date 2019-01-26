const express = require("express");
const router = express.Router();
const { all, find, create } = require("../controllers/UsersController");

router.get("/", all);
router.get("/:id", find);
router.post("/create", create);

module.exports = router;
