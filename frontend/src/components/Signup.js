"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Signup.css"

const SignupForm = ({ userType }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [license, setLicense] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email,
          password,
          role: userType,
          license: userType === "driver" ? license : undefined,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("Signup successful:", data)
        navigate("/login") // Redirect to login page after successful signup
      } else {
        setError(data.message || "Signup failed")
      }
    } catch (error) {
      console.error("Error during signup:", error)
      setError("An error occurred during signup")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor={`${userType}-name`}>Full Name</label>
        <input
          id={`${userType}-name`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${userType}-email`}>Email</label>
        <input
          id={`${userType}-email`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${userType}-password`}>Password</label>
        <div className="password-input">
          <input
            id={`${userType}-password`}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="password-toggle">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      {userType === "driver" && (
        <div className="form-group">
          <label htmlFor="license">Driver's License Number</label>
          <input
            id="license"
            type="text"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            placeholder="DL12345678"
            required
          />
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
      <div className="form-actions">
        <button type="button" className="btn btn-secondary" onClick={() => navigate("/login")}>
          Back to Login
        </button>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  )
}

const Signup = () => {
  const [activeTab, setActiveTab] = useState("user")

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <p>Create your BUSMAN account</p>
        <div className="tabs">
          <button className={`tab ${activeTab === "user" ? "active" : ""}`} onClick={() => setActiveTab("user")}>
            User
          </button>
          <button className={`tab ${activeTab === "driver" ? "active" : ""}`} onClick={() => setActiveTab("driver")}>
            Driver
          </button>
          <button className={`tab ${activeTab === "admin" ? "active" : ""}`} onClick={() => setActiveTab("admin")}>
            Admin
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "user" && <SignupForm userType="user" />}
          {activeTab === "driver" && <SignupForm userType="driver" />}
          {activeTab === "admin" && <SignupForm userType="admin" />}
        </div>
        <div className="terms">
          <p>
            By signing up, you agree to our <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup

