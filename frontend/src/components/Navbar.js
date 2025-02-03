import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">BUSMAN</Link>
      </div>
      <div className="navbar-links">
        <Link to="/book-ticket" className="navbar-button">
          Book Ticket
        </Link>
        <Link to="/customer-support" className="navbar-button icon-button">
          <i className="fas fa-headset"></i>
        </Link>
        <div className="account-dropdown">
          <button className="navbar-button icon-button" onClick={toggleAccountMenu}>
            <i className="fas fa-user"></i>
          </button>
          {isAccountMenuOpen && (
            <div className="dropdown-menu">
              <Link to="/login" onClick={toggleAccountMenu}>
                Login
              </Link>
              <Link to="/signup" onClick={toggleAccountMenu}>
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

