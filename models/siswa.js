'use strict';
module.exports = (sequelize, DataTypes) => {
  const Siswa = sequelize.define('Siswa', {
    nis: DataTypes.STRING,
    nama: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    alamat: DataTypes.STRING,
    jurusan: DataTypes.STRING
  }, {});
  Siswa.associate = function(models) {
    // associations can be defined here
  };
  return Siswa;
};