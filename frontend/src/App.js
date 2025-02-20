import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import BookTicket from "./components/BookTicket"
import CustomerSupport from "./components/CustomerSupport"
import Login from "./components/Login"
import Signup from "./components/Signup"
import ForgotPassword from "./components/ForgotPassword"
import AdminDashboard from "./components/AdminDashboard"
import DriverDashboard from "./components/DriverDashboard"
import UserDashboard from "./components/UserDashboard"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-ticket" element={<BookTicket />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/driver" element={<DriverDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

