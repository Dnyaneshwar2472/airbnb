const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
 
});

const Booking = mongoose.model("Booking", bookingSchemaSchema);

module.exports = { Booking };
