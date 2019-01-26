const models = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  // get / ambil semua data Siswa
  all: (req, res) => {
    models.Siswa.all()
      .then(siswas => {
        res.status(200).json({
          message: "Success Read Siswa All",
          data: siswas
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Something Went Wrong"
        });
      });
  },
  // search data berdasarkan ID
  find: (req, res) => {
    const { id } = req.params;
    models.Siswa.findOne({
      where: { id: id }
    })
      .then(siswas => {
        res.status(200).json({
          message: "Success Read Data Siswa",
          data: siswas
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Something went wrong"
        });
      });
  },
  // tambah data
  create: (req, res) => {
    const { nis, nama, no_telp, alamat, jurusan } = req.body;
    models.Siswa.create({
      nis,
      nama,
      no_telp,
      alamat,
      jurusan
    })
      .then(siswas => {
        res.status(201).json({
          message: "Success Create Data Siswa",
          data: siswas
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
  // ubah atau update data
  update: (req, res) => {
    const { id } = req.params;
    const { nis, nama, no_telp, alamat, jurusan } = req.body;
    models.Siswa.findOne({
      where: { id: id }
    })
      .then(siswas => {
        siswas
          .update({
            nis,
            nama,
            no_telp,
            alamat,
            jurusan
          })
          .then(siswas => {
            res.status(201).json({
              message: "Success Update Data Siswa",
              data: siswas
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
      })
      .catch(err => {
        res.status(500).json({
          message: "Something Went Wrong"
        });
      });
  },
  destroy: (req, res) => {
    const { id } = req.params;
    models.Siswa.findOne({
      where: {
        id: id
      }
    })
      .then(siswas => {
        siswas
          .destroy()
          .then(() => {
            res.status(200).json({
              message: "Success Delete Data Mahasiswa",
              data: siswas
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
  }
};
