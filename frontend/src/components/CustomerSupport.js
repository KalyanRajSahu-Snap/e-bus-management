import { Link } from "react-router-dom"
import "./CustomerSupport.css"

function CustomerSupport() {
  return (
    <div className="customer-support">
      <div className="support-sidebar">
        <div className="query-section">
          <div className="query-icon">❓</div>
          <h3>Have a query related to your bookings or on your previous concerns?</h3>
          <Link to="/login" className="login-link">
            Login to your account
          </Link>
        </div>

        <div className="faqs-section">
          <h2>FAQs (Select a Help Topic)</h2>
          <div className="ticket-types">
            <div className="ticket-type">
              <div className="ticket-icon">🚌</div>
              <span>Bus Tickets</span>
            </div>
            <div className="ticket-type">
              <div className="ticket-icon">🚂</div>
              <span>Train Tickets</span>
            </div>
            <div className="ticket-type">
              <div className="ticket-icon">🚇</div>
              <span>Metro</span>
            </div>
          </div>
        </div>

        <div className="other-topics">
          <h2>Other topics</h2>
          <div className="topic-item">
            <div className="topic-icon">⚙️</div>
            <div className="topic-content">
              <h3>Technical Issues</h3>
              <p>Need some technical help?</p>
            </div>
            <span className="arrow">›</span>
          </div>
          <div className="topic-item">
            <div className="topic-icon">🎯</div>
            <div className="topic-content">
              <h3>BUSMAN Referral Help</h3>
              <p>Need help with BUSMAN referrals?</p>
            </div>
            <span className="arrow">›</span>
          </div>
          <div className="topic-item">
            <div className="topic-icon">🚌</div>
            <div className="topic-content">
              <h3>New bus booking help</h3>
              <p>Bus availability/ Child fare, Luggage</p>
            </div>
            <span className="arrow">›</span>
          </div>
          <div className="topic-item">
            <div className="topic-icon">🎫</div>
            <div className="topic-content">
              <h3>Offers</h3>
              <p>Check latest offers and discounts</p>
            </div>
            <span className="arrow">›</span>
          </div>
        </div>
      </div>

      <div className="support-main">
        <h1>BUSMAN Help</h1>
        <div className="support-illustration">
          <img src="/images/customer-support.png" alt="Customer Support Representative" />
        </div>
        <h2>24/7 Customer Support</h2>
      </div>
    </div>
  )
}

export default CustomerSupport

