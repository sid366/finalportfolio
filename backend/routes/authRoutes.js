const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Register route (might be disabled in production)
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

// Get current user route
router.get('/me', protect, authController.getCurrentUser);

// Logout route
router.post('/logout', authController.logout);

module.exports = router; 