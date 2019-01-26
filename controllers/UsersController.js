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
  },
  create: (req, res) => {
    const { email, name, password, role } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    models.User.create({
      email,
      password: hashPassword,
      name,
      role
    })
      .then(user => {
        res.status(201).json({
          message: "Success Create User",
          data: user
        });
      })
      .catch(err => {
        if (err.errors[0].message) {
          const message = err.errors[0].message;
          res.status(403).json({
            message: message
          });
        } else {
          res.status(500).json({
            message: "Something Went Wrong"
          });
        }
      });
  }
};
