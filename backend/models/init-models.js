// const sequelize = require("../config/dbConfig");

const { DataTypes } = require("sequelize");

const _user = require("../models/user");

const _event = require("./event")

const _notice = require("../models/notice")


function createTables(sequelize) {
  let users = _user(sequelize, DataTypes);

  let events = _event(sequelize,DataTypes)

  let notices = _notice(sequelize,DataTypes)

  

  return {
    users,
    events,
    notices
  };
}

module.exports = { createTables };
