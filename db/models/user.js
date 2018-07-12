'use strict';
module.exports = (sequelize, DataTypes) => {
  let user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    userName: {
      allowNull: false,
      type: DataTypes.TEXT,
      unique: true,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
