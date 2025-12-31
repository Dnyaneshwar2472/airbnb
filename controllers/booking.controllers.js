const {
  readBookings,
  readBookingById,
  createBooking,
  updateBooking,
  removeBooking,
} = require("../models/booking.model");

const getBookings = (req, res) => {
  try {
    const bookings = readBookings();
    res.send(bookings);
  } catch (error) {
    console.log(error);
  }
};
const addBooking = (req, res) => {
  try {
    // const hotels = readHotels();
    // res.render("add-hotel");
  } catch (error) {
    console.log(error);
  }
};
const getBookingById = (req, res) => {
  try {
    const booking = readBookingById(req.params.id);
    res.send(booking);
    // res.render("hotel", { hotel });
  } catch (error) {
    console.log(error);
  }
};

const postBooking = (req, res) => {
  try {
    createBooking(req.body);
    res.send("Booking Added");
  } catch (error) {
    console.log(error);
  }
};

const putBooking = (req, res) => {
  try {
    updateBooking(req.params.id, req.body);
    res.send("Booking Updated");
  } catch (error) {
    console.log(error);
  }
};

const deleteBooking = (req, res) => {
  removeBooking(req.params.id);
  res.send("Booking Deleted");
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBookings,
  getBookingById,
  postBooking,
  putBooking,
  deleteBooking,
};
