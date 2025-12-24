const express = require("express");
const bodyParser = require("body-parser");
const { hotelRoutes } = require("./routes/hotel.routes");

const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/mongoDB");
connectDB();
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", hotelRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
