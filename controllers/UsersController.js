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
  },
  update: (req, res) => {
    const { id } = req.params;
    const { email, password, name, role } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    models.User.findOne({
      where: { id: id }
    })
      .then(user => {
        if (user) {
          user
            .update({
              email,
              password: hashPassword,
              name,
              role
            })
            .then(updatedUser => {
              res.status(200).json({
                message: "Success Update User",
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
        } else {
          res.status(404).json({
            message: "User Not Found"
          });
        }
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
  },
  destroy: (req, res) => {
    const { id } = req.params;
    models.User.findOne({
      where: {
        id: id
      }
    })
      .then(user => {
        user
          .destroy()
          .then(() => {
            res.status(200).json({
              message: "Success Delete User",
              data: user
            });
          })
          .catch(err => {
            res.status(500).json({
              message: "Something Went Wrong"
            });
          });
      })
      .catch(err => {
        res.status(500).json({
          message: "Something Went Wrong"
        });
      });
  },
  signin: (req, res) => {
    const { email, password } = req.body;
    models.User.findOne({
      where: {
        email: email
      }
    }).then(user => {
      if (user) {
        const checkPassword = bcrypt.compareSync(password, user.password); // true
        if (checkPassword) {
          const token = jwt.sign(
            {
              user: {
                id: user.id,
                email: user.email
              }
            },
            "secret"
          );
          res.status(200).json({
            message: "Success Signin",
            data: { token, role: user.role }
          });
        } else {
          res.status(403).json({
            message: "Invalid Signin"
          });
        }
      } else {
        res.status(403).json({
          message: "Invalid Signin"
        });
      }
    });
  }
};
