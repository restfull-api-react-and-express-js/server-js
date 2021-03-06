"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
