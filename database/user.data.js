const { model } = require("mongoose");

const users = [
  {
    id: 1,
    name: "Mauli",
    email: "mauli@gmail.com",
    phone: "8767845323",
    password: "123",
  },
  {
    id: 2,
    name: "Girish",
    email: "girish@gmail.com",
    phone: "987651230",
    password: "123",
  },
];

module.exports = { users };
