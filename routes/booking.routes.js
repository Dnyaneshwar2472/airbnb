const express = require("express");
const {
  getBookings,
  getBookingById,
  postBooking,
  putBooking,
  deleteBooking,
} = require("../controllers/booking.controllers");

const bookingRoutes = express.Router();

bookingRoutes.get("/", getBookings);

bookingRoutes.get("/:id", getBookingById);
bookingRoutes.post("/", postBooking);
bookingRoutes.put("/:id", putBooking);
bookingRoutes.delete("/:id", deleteBooking);

module.exports = {
  bookingRoutes,
};
