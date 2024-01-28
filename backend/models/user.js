module.exports = function (sequelize, dataType) {
  return sequelize.define("users", {
    id: {
      autoIncrement: true,
      type: dataType.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: dataType.STRING(255),
      allowNull: false,
    },
    email: {
      type: dataType.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: dataType.STRING(255),
      allowNull: false,
      unique: true,
    },
    MobileNumber: {
      type: dataType.STRING(255),
      allowNull: false,
      unique: true,
    },
  });
};
