const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const {
  all,
  find,
  create,
  update,
  destroy
} = require("../controllers/SiswaController");

router.get("/", auth, all);
router.get("/:id", auth, find);
router.post("/create", auth, create);
router.put("/:id", auth, update);
router.delete("/:id", auth, destroy);

module.exports = router;
