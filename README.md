# AgriConnect Backend API

This is the backend API for the AgriConnect platform, built with Node.js, Express, and MongoDB.

## Deployment Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account (for production database)

### Local Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
   ```
   NODE_ENV=development
   PORT=5400
   MONGO_URI=mongodb://localhost:27017/agriconnect
   JWT_SECRET=your_jwt_secret_key_change_in_production
   JWT_EXPIRE=30d
   UPLOAD_PATH=./uploads
   ```
4. Start the server: `npm start`

### Deployment to Render
1. Create a MongoDB Atlas database
2. Connect your GitHub repository to Render
3. Create a new Web Service
4. Use the following settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add the following environment variables:
   - NODE_ENV: production
   - PORT: 10000 (Render will override this with its own PORT)
   - MONGO_URI: your MongoDB Atlas connection string
   - JWT_SECRET: a secure random string
   - JWT_EXPIRE: 30d
   - UPLOAD_PATH: ./uploads

## API Endpoints

- `/api/auth` - Authentication routes
- `/api/users` - User management
- `/api/farmers` - Farmer-specific routes
- `/api/vendors` - Vendor-specific routes
- `/api/products` - Product management
- `/api/bookings` - Booking system
- `/api/messages` - Messaging system
- `/api/notifications` - Notification system
