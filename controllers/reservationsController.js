// controllers/reservationsController.js

const Reservation = require("../models/reservationModel");

exports.createReservation = async (req, res) => {
  const { userId, eventDate, numberOfGuests } = req.body;

  try {
    // Validate event date
    if (new Date(eventDate) <= new Date()) {
      return res
        .status(400)
        .json({ message: "Event date must be in the future" });
    }

    // Validate number of guests
    if (numberOfGuests <= 0) {
      return res
        .status(400)
        .json({ message: "Number of guests must be a positive number" });
    }

  

    // Validate number of guests
    if (numberOfGuests <= 0) {
      return res
        .status(400)
        .json({ message: "Number of guests must be a positive number" });
    }

    // Create a new reservation
    const newReservation = await Reservation.create({
      userId,
      eventDate,
      numberOfGuests,
    });

    res.status(201).json({ reservation: newReservation });
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
