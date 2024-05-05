// controllers/usersController.js

const users = require('../models/userModel');

exports.createusers = async (req, res) => {
  const { name, phone, email } = req.body;

  try {
    // Check if the phone number already exists
    const existingusers = await users.findOne({ phone });
    if (existingusers) {
      return res.status(400).json({ message: 'Phone number already exists' });
    }

    // Create a new users
    const newusers = await users.create({ name, phone, email });

    res.status(201).json({ users: newusers, message: 'users created successfully' });
  } catch (error) {
    console.error('Error creating users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


