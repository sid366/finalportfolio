const Contact = require('../models/Contact');

// Get contact information
exports.getContact = async (req, res) => {
  try {
    // We'll just get the first contact info, since we only need one set for this portfolio
    const contact = await Contact.findOne();
    
    if (!contact) {
      return res.status(404).json({ message: 'Contact information not found' });
    }
    
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create new contact information (POST)
exports.createContact = async (req, res) => {
  try {
    // Check if contact info already exists
    const existingContact = await Contact.findOne();
    
    if (existingContact) {
      return res.status(400).json({ message: 'Contact information already exists, use PUT to update' });
    }
    
    const newContact = new Contact(req.body);
    await newContact.save();
    
    res.status(201).json({ message: 'Contact information created successfully', contact: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update contact information (PUT)
exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    
    if (!contact) {
      return res.status(404).json({ message: 'Contact information not found' });
    }
    
    // Update fields
    const { email, phone, linkedin, github } = req.body;
    
    if (email) contact.email = email;
    if (phone) contact.phone = phone;
    if (linkedin) contact.linkedin = linkedin;
    if (github) contact.github = github;
    
    contact.updatedAt = Date.now();
    
    await contact.save();
    
    res.status(200).json({ message: 'Contact information updated successfully', contact });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete contact information (DELETE)
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    
    if (!contact) {
      return res.status(404).json({ message: 'Contact information not found' });
    }
    
    await Contact.deleteOne({ _id: contact._id });
    
    res.status(200).json({ message: 'Contact information deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}; 