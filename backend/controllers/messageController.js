const Message = require('../models/Message');

// Get all messages
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single message by ID
exports.getMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create a new message (POST)
exports.createMessage = async (req, res) => {
  try {
    console.log('Received message data:', req.body);
    
    const { name, email, message } = req.body;
    const subject = req.body.subject || 'Contact Form Submission'; // Make subject optional
    
    // Check for required fields
    const missingFields = [];
    if (!name) missingFields.push('name');
    if (!email) missingFields.push('email');
    if (!message) missingFields.push('message');
    
    if (missingFields.length > 0) {
      console.log('Missing required fields:', missingFields);
      return res.status(400).json({ 
        message: `Please fill all required fields: ${missingFields.join(', ')}`,
        receivedData: req.body
      });
    }
    
    const newMessage = new Message({
      name,
      email,
      subject,
      message
    });
    
    await newMessage.save();
    
    res.status(201).json({ message: 'Message sent successfully', data: newMessage });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update message (mark as read) (PUT)
exports.updateMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    
    // Update the read status
    message.read = req.body.read !== undefined ? req.body.read : message.read;
    
    await message.save();
    
    res.status(200).json({ message: 'Message updated successfully', data: message });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete message (DELETE)
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    
    await Message.deleteOne({ _id: message._id });
    
    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}; 