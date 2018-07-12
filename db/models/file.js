'use strict';
module.exports = (sequelize, DataTypes) => {
  let file = sequelize.define('file', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    filename: {
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
  file.associate = function(models) {
    // associations can be defined here
  };
  return file;
};
