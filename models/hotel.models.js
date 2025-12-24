const { hotels } = require("../database/hotel.data");

const readHotels = () => {
  try {
    return hotels;
  } catch (error) {
    console.log(error);
  }
};

const readHotelById = (id) => {
  try {
    for (let index = 0; index < hotels.length; index++) {
      if (hotels[index].id == id) {
        return hotels[index];
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const createHotel = (newhotel) => {
  try {
    
console.log(newhotel)
hotels.push(newhotel)

  } catch (error) {
    console.log(error);
  }
};

const updateHotel = (id, newData) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const removeHotel = (id) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  readHotels,
  readHotelById,
  createHotel,
  updateHotel,
  removeHotel,
};
