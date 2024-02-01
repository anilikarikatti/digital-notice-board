// const sequelize = require("../config/dbConfig");

const { DataTypes } = require("sequelize");

const _user = require("../models/user");

const _announcement = require("../models/announcement")

const _notice = require("../models/notice")


function createTables(sequelize) {
  let users = _user(sequelize, DataTypes);

  let announcements = _announcement(sequelize,DataTypes)

  let notices = _notice(sequelize,DataTypes)

  

  return {
    users,
    announcements,
    notices
  };
}

module.exports = { createTables };
