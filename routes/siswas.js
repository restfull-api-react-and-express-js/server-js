const express = require("express");
const router = express.Router();
const {
  all,
  find,
  create,
  update,
  destroy
} = require("../controllers/SiswaController");

router.get("/", all);
router.get("/:id", find);
router.post("/create", create);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
