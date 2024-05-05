const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./database/database");

const app = express();

app.use(express.json());

dotenv.config();

//Connecting to database
connectDB();

const PORT = process.env.PORT;

// Creating a Test Route or endpoint
app.get("/test", (req, res) => {
  res.send("test api is working ... !");
});

//configuring user Routes
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/reservations", require("./routes/reservationRoutes"));
app.use('/api/book-appointment', require ("./routes/appointmentsRoutes"));

// Starting the server
app.listen(PORT, () => {
  console.log(`Server  is running on  port: ${PORT} 
// API URL
// http://localhost:5555/api/user/create`);
});
