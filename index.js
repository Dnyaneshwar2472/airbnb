const express = require("express");
const bodyParser = require("body-parser");
const { hotelRoutes } = require("./routes/hotel.routes");
const { userRoutes } = require("./routes/user.routes");
const { bookingRoutes } = require("./routes/booking.routes");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/mongoDB");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/hotel", hotelRoutes);

app.use("/user", userRoutes);

app.use("/booking", bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
