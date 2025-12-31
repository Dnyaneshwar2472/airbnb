const { users } = require("../database/user.data");

const readUsers = () => {
  try {
    return users;
  } catch (error) {
    console.log(error);
  }
};

const readUserById = (id) => {
  try {
    for (let index = 0; index < users.length; index++) {
      if (users[index].id == id) {
        return users[index];
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const createUser = (newUser) => {
  try {
    console.log(newUser);
    hotels.push(newUser);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = (id, newData) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const removeUser = (id) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  readUsers,
  readUserById,
  createUser,
  updateUser,
  removeUser,
};
