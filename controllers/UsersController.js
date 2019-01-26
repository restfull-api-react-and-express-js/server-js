const models = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Op = require("sequelize").Op;

module.exports = {
  all: (req, res) => {
    models.User.all()
      .then(user => {
        res.status(200).json({
          message: "Success Read User",
          data: user
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Something Went Wrong"
        });
      });
  },
  find: (req, res) => {
    const { id } = req.params;
    models.User.findOne({
      where: {
        id: id
      }
    })
      .then(user => {
        res.status(200).json({
          message: "Success Read User",
          data: user
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Something Went Wrong"
        });
      });
  }
};
