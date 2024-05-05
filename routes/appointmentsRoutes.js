// routes/appointmentsRoutes.js

const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointmentsController');

router.post('/create', appointmentsController.bookAppointment);

module.exports = router;
