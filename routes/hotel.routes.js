const express = require("express");
const {
  getHotels,
  getHotelById,
  postHotel,
  putHotel,
  deleteHotel,
  addHotel,
} = require("../controllers/hotel.controlles");

const hotelRoutes = express.Router();

hotelRoutes.get("/", getHotels);
hotelRoutes.get("/add-hotel", addHotel);

hotelRoutes.get("/:id", getHotelById);
hotelRoutes.post("/", postHotel);
hotelRoutes.put("/:id", putHotel);
hotelRoutes.delete("/:id", deleteHotel);

module.exports = {
  hotelRoutes,
};
