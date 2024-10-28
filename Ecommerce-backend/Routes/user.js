const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes
router.post('/register', userController.registerUser); // Register a new user
router.post('/login', userController.loginUser);       // Login a user
router.delete('/:userId', userController.deleteUser);  // Delete a user by ID

module.exports = router;
