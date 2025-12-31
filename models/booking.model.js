const { bookings } = require("../database/booking.data");

const readBookings = () => {
  try {
    return bookings;
  } catch (error) {
    console.log(error);
  }
};

const readBookingById = (id) => {
  try {
    for (let index = 0; index < bookings.length; index++) {
      if (bookings[index].id == id) {
        return bookings[index];
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const createBooking = (newBooking) => {
  try {
    console.log(newBooking);
    hotels.push(newBooking);
  } catch (error) {
    console.log(error);
  }
};

const updateBooking = (id, newData) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const removeBooking = (id) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  readBookings,
  readBookingById,
  createBooking,
  updateBooking,
  removeBooking,
};
