const { Sequelize } = require("sequelize");
const chalk = require("chalk");
const { createTables } = require("../models/init-models");

const database = "noticeboard";
const userName = "root";
const password = "root";

const sequelize = new Sequelize(database, userName, password, {
  host: "localhost",
  dialect: "mysql",
  pool: {
    min: 0,
    max: 5,
    acquire: 60000,
    idle: 1000,
  },
});

// console.log(sequelize);
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log(chalk.green("==> Database Connection Established <=="));
  } catch (err) {
    console.log(
      chalk.red(`unable to connect ==> The error is ======  ${err} =======`)
    );
  }
};

connection();

const databases = createTables(sequelize);
console.log(databases);

module.exports = { databases };
