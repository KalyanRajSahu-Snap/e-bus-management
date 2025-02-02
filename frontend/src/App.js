import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import BookTicket from "./components/BookTicket"
import CustomerSupport from "./components/CustomerSupport"
import Login from "./components/Login"
import Signup from "./components/Signup"
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
          <Route path="/" exact component={Home} />
          <Route path="/book-ticket" component={BookTicket} />
          <Route path="/customer-support" component={CustomerSupport} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/driver" component={DriverDashboard} />
          <Route path="/user" component={UserDashboard} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

