const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { protect, adminOnly } = require('../middleware/auth');

// Public route - Create a new message
router.post('/', messageController.createMessage);

// Protected admin routes
router.get('/', protect, adminOnly, messageController.getAllMessages);
router.get('/:id', protect, adminOnly, messageController.getMessage);
router.put('/:id', protect, adminOnly, messageController.updateMessage);
router.delete('/:id', protect, adminOnly, messageController.deleteMessage);

module.exports = router; 