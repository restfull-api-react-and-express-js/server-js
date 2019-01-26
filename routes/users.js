const express = require("express");
const router = express.Router();
const { all, find, create, update } = require("../controllers/UsersController");

router.get("/", all);
router.get("/:id", find);
router.post("/create", create);
router.put("/:id", update);

module.exports = router;
