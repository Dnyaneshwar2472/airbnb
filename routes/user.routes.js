const express = require("express");
const {
  getUsers,
  getUserById,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/user.controllers");

const userRoutes = express.Router();

userRoutes.get("/", getUsers);
// userRoute.get("/add-user", );

userRoutes.get("/:id", getUserById);
userRoutes.post("/", postUser);
userRoutes.put("/:id", putUser);
userRoutes.delete("/:id", deleteUser);

module.exports = {
  userRoutes,
};
