# Portfolio Project

## Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (free tier is sufficient)
- npm (usually comes with Node.js)

## MongoDB Atlas Setup
1. Create a free MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster (free tier is fine)
3. Set up database access:
   - Go to "Database Access" under Security
   - Click "Add New Database User"
   - Create a user with password authentication
   - Save the username and password - you'll need them later
4. Set up network access:
   - Go to "Network Access" under Security
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (or add your specific IP)
5. Get your connection string:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It will look like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
   - Replace `<username>` and `<password>` with your database user credentials

## Project Setup

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with these variables:
   ```
   PORT=5003
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=x85Aq7C2bP9sR3vF1nT6dK4eZ8wL0jY3mX7uH2gJ
   ```
   Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string from step 5 above.

4. Create the admin user:
   ```bash
   node createAdmin.js admin portfolio123
   ```
   This creates an admin user with:
   - Username: admin
   - Password: portfolio123

5. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on http://localhost:5003

### Frontend Setup
1. Open a new terminal and navigate to the project root directory

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```
   The frontend will run on http://localhost:3000

## Accessing the Application
1. Main application: http://localhost:3000
2. Admin panel: http://localhost:3000/admin
   - Login with:
     - Username: admin
     - Password: portfolio123

## Troubleshooting
1. If you see "Port already in use" error:
   - Windows: Run these commands in PowerShell:
     ```powershell
     netstat -ano | findstr :5003
     taskkill /F /PID <PID>
     ```
   - Mac/Linux:
     ```bash
     lsof -i :5003
     kill -9 <PID>
     ```

2. If you see MongoDB connection errors:
   - Verify your MongoDB Atlas connection string in `.env`
   - Check if your IP is whitelisted in MongoDB Atlas
   - Ensure your database user credentials are correct

## Project Structure
- `/src` - Frontend React application
- `/backend` - Express.js backend server
  - `/routes` - API route definitions
  - `/controllers` - Route controllers
  - `/models` - MongoDB models
  - `/middleware` - Custom middleware

## Technologies Used
- Frontend: React, TypeScript, Styled Components
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Authentication: JWT

## Notes for Professor
1. The application uses MongoDB Atlas for the database
2. All environment variables are documented in this README
3. The backend includes proper error handling and validation
4. API endpoints follow RESTful conventions
5. The admin panel allows content management
6. The frontend is built with React and TypeScript for type safety
7. The project demonstrates full-stack development capabilities including:
   - Database integration
   - User authentication
   - Frontend-backend communication
   - Responsive design
   - Modern web development practices
