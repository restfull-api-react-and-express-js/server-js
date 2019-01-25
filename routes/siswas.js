const express = require('express');
const router = express.Router();
const Op = require('sequelize').Op
const { all, find, create, update, destroy} = require('../controllers/siswaController')

  router.get('/', all);
  router.get('/:id', find);
  router.post('/create', create);
  router.put('/:id', update);
  router.delete('/:id', destroy);

module.exports = router;