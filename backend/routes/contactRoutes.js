const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Get contact information
router.get('/', contactController.getContact);

// Create new contact information
router.post('/', contactController.createContact);

// Update contact information
router.put('/', contactController.updateContact);

// Delete contact information
router.delete('/', contactController.deleteContact);

module.exports = router; 