const express = require('express');
const router = express.Router();
const Op = require('sequelize').Op
const { all} = require('../controllers/siswaController')

  router.get('/', all);

module.exports = router;