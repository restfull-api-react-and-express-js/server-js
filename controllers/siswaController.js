const models = require('../models');
const Op = require('sequelize').Op


module.exports = {
  all: (req,res) => {
      models.Siswa.all().then(siswas => {
        res.status(200).json({
          message: 'Success Read Siswa All',
          data: siswas
        })
      }).catch((err) => {
        res.status(500).json({
          message: 'Something Went Wrong'
        })
      })    
    }
};