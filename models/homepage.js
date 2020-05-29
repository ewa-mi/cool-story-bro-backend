"use strict";
module.exports = (sequelize, DataTypes) => {
  const homepage = sequelize.define(
    "homepage",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      backgroundColor: DataTypes.STRING,
      color: DataTypes.STRING,
    },
    {}
  );
  homepage.associate = function (models) {
    homepage.belongsTo(models.user);
    homepage.hasMany(models.story);
  };
  return homepage;
};
