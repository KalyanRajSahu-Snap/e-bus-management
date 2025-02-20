"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./ForgotPassword.css"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send a request to your backend to initiate the password reset process
    // For this example, we'll just show a success message
    setMessage("If an account exists for " + email + ", you will receive password reset instructions.")
  }

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Forgot Password</h2>
        <p>Enter your email address and we'll send you instructions to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </form>
        {message && <div className="message">{message}</div>}
        <div className="links">
          <Link to="/login">Back to Login</Link>
          <Link to="/signup">Create an Account</Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

