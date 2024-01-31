// const sequelize = require("../config/dbConfig");

const { DataTypes } = require("sequelize");
const _user = require("../models/user");

const _announcement = require("../models/announcement")

function createTables(sequelize) {
  let users = _user(sequelize, DataTypes);

  let announcements = _announcement(sequelize,DataTypes)
  

  return {
    users,
    announcements
  };
}

module.exports = { createTables };
