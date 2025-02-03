import { useState } from "react"
import "./Login.css"

const LoginForm = ({ userType }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log(`${userType} login:`, { email, password })
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="form-actions">
        <button type="button" className="btn btn-secondary">
          Create Account
        </button>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  )
}

const Login = () => {
  const [activeTab, setActiveTab] = useState("user")

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <p>Choose your account type to login</p>
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
          {activeTab === "user" && <LoginForm userType="user" />}
          {activeTab === "driver" && <LoginForm userType="driver" />}
          {activeTab === "admin" && <LoginForm userType="admin" />}
        </div>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot password?</a>
        </div>
      </div>
    </div>
  )
}

export default Login

