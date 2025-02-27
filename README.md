# E-Bus Management System 🚌

## Overview
The E-Bus Management System is a comprehensive web application designed to streamline bus transportation services. It provides features for users to book tickets, drivers to manage their schedules, and administrators to oversee the entire system.

## ✨ Features
- User registration and authentication (Passengers, Drivers, Admins)
- Ticket booking system
- Driver dashboard with trip management
- Real-time seat availability
- Customer support interface
- Responsive design for mobile and desktop

## 🛠️ Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js with Express.js
- **Database:** MongoDB
- **State Management:** React Hooks
- **Routing:** React Router
- **Styling:** CSS with potential for styled-components or CSS-in-JS
- **Authentication:** JSON Web Tokens (JWT)

## 📋 Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0 or later)

## 🚀 Installation & Setup

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/KalyanRajSahu-Snap/e-bus-management.git
   cd e-bus-management-system
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/e-bus-db
   JWT_SECRET=your_jwt_secret_key
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory with the following variables:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

## 📱 Usage
After setting up both frontend and backend, you can access the application at `http://localhost:3000`.

### User Types
1. **Passengers:**
   - Register/Login to the system
   - Search for bus routes
   - Book tickets

2. **Drivers:**
   - Login to the driver dashboard
   - View assigned routes and schedules

3. **Administrators:**
   - Manage bus routes and schedules
   - Handle user accounts

## 🧪 Testing
Run tests using the following commands:

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```
## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
