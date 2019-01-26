"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  up: (queryInterface, Sequelize) => {
    const password = bcrypt.hashSync("rahasia", 10);
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "superadmin",
          email: "superadmin@gmail.com",
          password: password,
          role: "super_admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "admin",
          email: "admin@gmail.com",
          password: password,
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "kasir",
          email: "kasir@gmail.com",
          password: password,
          role: "kasir",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
