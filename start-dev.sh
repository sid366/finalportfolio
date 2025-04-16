#!/bin/bash

# Navigate to the backend directory and install dependencies
echo "Installing backend dependencies..."
cd backend
npm install

# Start the backend server in the background
echo "Starting backend server..."
npm run dev &
BACKEND_PID=$!

# Navigate back to the root directory
cd ..

# Start the frontend server
echo "Starting frontend server..."
npm start

# When the frontend server stops, also stop the backend server
kill $BACKEND_PID 