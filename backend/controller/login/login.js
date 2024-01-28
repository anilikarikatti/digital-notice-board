// const dataBase = require("../../config/dbConfig");

const { databases } = require("../../config/dbConfig");
const login = async (req, res) => {
  // for insert values to table
  // let resp = await databases.users.create({
  //   name: "anil",
  //   email: "anil@gmail.com",
  //   password: "1234",
  //   MobileNumber: "9999999",
  // });

  let resp = await databases.users.findAll();

  console.log(resp);

  res.send(resp);
};

module.exports = { login };
