const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  heading: String,
  subHeading: String,
  location: String,
  guests: String,
  bedroom: String,
  bed: String,
  bathroom: String,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  image5: String,
  price: String,
  rating: String,
  nights: String,
  favorite: String,
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = { Hotel };
