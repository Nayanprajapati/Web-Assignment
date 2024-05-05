// routes/reservationsRoutes.js

const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationsController');

router.post('/create', reservationsController.createReservation);

module.exports = router;
