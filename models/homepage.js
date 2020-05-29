"use strict";
module.exports = (sequelize, DataTypes) => {
  const homepage = sequelize.define(
    "homepage",
    {
      description: DataTypes.TEXT,
      backgroundColor: DataTypes.STRING,
      color: DataTypes.STRING,
    },
    {}
  );
  homepage.associate = function (models) {
    // associations can be defined here
  };
  return homepage;
};
