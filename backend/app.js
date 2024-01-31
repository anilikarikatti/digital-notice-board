const express = require("express");
const logger = require("morgan");
const chalk = require("chalk");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(logger("dev"));
require("dotenv").config();

app.get("/name", (req, res) => {
  res.status(200).send("anil");
});

let port = process.env.PORT;

console.log(chalk.red(process.env.PORT));

// routing

const login = require("./routes");

app.use("/v1", login);


app.listen(port, () => {
  console.log(chalk.yellow(`url : http://localhost:${port}`));
});
