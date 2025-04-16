const jwt = require('jsonwebtoken');

// Middleware to verify token
exports.protect = (req, res, next) => {
  // Get token from cookie
  const token = req.cookies.token;
  
  console.log('Auth middleware - Cookie check:', { 
    hasCookies: !!req.cookies,
    hasToken: !!token,
    cookieKeys: req.cookies ? Object.keys(req.cookies) : [] 
  });
  
  // Check if token exists
  if (!token) {
    console.log('Auth middleware - No token found in cookies');
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
  
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    console.log('Auth middleware - Token verified successfully:', { userId: decoded.id, role: decoded.role });
    
    // Add user data to request
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Auth middleware - Token verification failed:', error.message);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

// Admin authorization middleware
exports.adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as admin' });
  }
}; 