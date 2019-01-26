const express = require("express");
const router = express.Router();
const {
  all,
  find,
  create,
  update,
  destroy,
  signin
} = require("../controllers/UsersController");

router.get("/", all);
router.get("/:id", find);
router.post("/create", create);
router.put("/:id", update);
router.delete("/:id", destroy);
router.post("/signin", signin);

module.exports = router;
