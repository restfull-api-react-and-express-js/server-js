'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Siswas', [{
        nis: "15312376",
        nama: "Elfin Sanjaya",
        no_telp: "0899909090",
        alamat: "Bandar Lampung",
        jurusan: "TKJ"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Siswas', null, {});
  }
};
