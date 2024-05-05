// routes/usersRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createusers);

module.exports = router;
