require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const username = process.argv[2];
const password = process.argv[3];

if (!username || !password) {
  console.error('Usage: node createAdmin.js <username> <password>');
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('MongoDB connected');
  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    
    if (existingUser) {
      console.log('User already exists');
      process.exit(0);
    }
    
    // Create new admin user
    const user = new User({
      username,
      password,
      role: 'admin'
    });
    
    await user.save();
    
    console.log(`Admin user "${username}" created successfully`);
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
})
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
}); 