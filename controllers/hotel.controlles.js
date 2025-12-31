const {
  readHotels,
  readHotelById,
  createHotel,
  removeHotel,
  updateHotel,
} = require("../models/hotel.models");

const getHotels = (req, res) => {
  try {
    const hotels = readHotels();
    res.render("home", { hotels });
  } catch (error) {
    console.log(error);
  }
};
const addHotel = (req, res) => {
  try {
    // const hotels = readHotels();
    res.render("add-hotel");
  } catch (error) {
    console.log(error);
  }
};
const getHotelById = (req, res) => {
  try {
    const hotel = readHotelById(req.params.id);
    // res.send(hotel);
    res.render("hotel", { hotel });
  } catch (error) {
    console.log(error);
  }
};

const postHotel = (req, res) => {
  try {
    createHotel(req.body);
    res.send("Hotel Added");
  } catch (error) {
    console.log(error);
  }
};

const putHotel = (req, res) => {
  try {
    updateHotel(req.params.id, req.body);
    res.send("HOtel Updated");
  } catch (error) {
    console.log(error);
  }
};

const deleteHotel = (req, res) => {
  removeHotel(req.params.id);
  res.send("Hotel Deleted");
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHotels,
  getHotelById,
  addHotel,
  postHotel,
  putHotel,
  deleteHotel,
};
