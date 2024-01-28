// const sequelize = require("../config/dbConfig");

const { DataTypes } = require("sequelize");
const _user = require("../models/user");

function createTables(sequelize) {
  let users = _user(sequelize, DataTypes);

  return {
    users,
  };
}

module.exports = { createTables };
