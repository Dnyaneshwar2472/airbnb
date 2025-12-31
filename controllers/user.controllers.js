const { readHotelById } = require("../models/hotel.models");
const {
  readUsers,
  createUser,
  removeUser,
  readUserById,
  updateUser,
} = require("../models/user.model");

const getUsers = (req, res) => {
  try {
    const users = readUsers();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};
const addUser = (req, res) => {
  try {
    // const hotels = readHotels();
    // res.render("add-hotel");
  } catch (error) {
    console.log(error);
  }
};
const getUserById = (req, res) => {
  try {
    const user = readUserById(req.params.id);
    res.send(user);
    // res.render("hotel", { hotel });
  } catch (error) {
    console.log(error);
  }
};

const postUser = (req, res) => {
  try {
    createUser(req.body);
    res.send("User Added");
  } catch (error) {
    console.log(error);
  }
};

const putUser = (req, res) => {
  try {
    updateUser(req.params.id, req.body);
    res.send("User Updated");
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = (req, res) => {
  removeUser(req.params.id);
  res.send("User Deleted");
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  putUser,
  deleteUser,
};
