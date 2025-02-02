import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">BUSMAN</Link>
      </div>
      <div className="navbar-links">
        <Link to="/book-ticket" className="navbar-button">
          Book Ticket
        </Link>
        <Link to="/customer-support" className="navbar-button">
          Customer Support
        </Link>
        <Link to="/login" className="navbar-button">
          Login
        </Link>
        <Link to="/signup" className="navbar-button">
          Signup
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

