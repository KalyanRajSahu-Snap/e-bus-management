import { useState, useEffect } from "react"
import "./Home.css"

function Home() {
  const [offers, setOffers] = useState([])
  const [govBuses, setGovBuses] = useState([])

  useEffect(() => {
    // Simulating an API call to fetch offers
    const fetchOffers = () => {
      const dummyOffers = [
        { id: 1, title: "20% Off on Weekend Trips", code: "WEEKEND20", expiry: "2023-06-30" },
        { id: 2, title: "Family Package: Kids Travel Free", code: "FAMILYFUN", expiry: "2023-07-15" },
        { id: 3, title: "Senior Citizen Discount: 15% Off", code: "SENIOR15", expiry: "2023-08-31" },
        { id: 4, title: "Early Bird Booking: 10% Off", code: "EARLY10", expiry: "2023-07-31" },
      ]
      setOffers(dummyOffers)
    }

    // Simulating an API call to fetch government bus services
    const fetchGovBuses = () => {
      const dummyGovBuses = [
        { id: 1, name: "Delhi Transport Corporation", routes: 540, fleetSize: 3781 },
        { id: 2, name: "Maharashtra State Road Transport", routes: 18000, fleetSize: 18500 },
        { id: 3, name: "Karnataka State Road Transport", routes: 8000, fleetSize: 8300 },
        { id: 4, name: "Andhra Pradesh State Road Transport", routes: 3800, fleetSize: 11500 },
      ]
      setGovBuses(dummyGovBuses)
    }

    fetchOffers()
    fetchGovBuses()
  }, [])

  return (
    <div className="home">
      <section className="hero">
        <h1>India's best Bus Management and Booking System</h1>
        <div className="search-container">
          <form className="search-form">
            <div className="form-group">
              <label htmlFor="from">From:</label>
              <input type="text" id="from" name="from" required placeholder="Enter departure city" />
            </div>
            <div className="form-group">
              <label htmlFor="to">To:</label>
              <input type="text" id="to" name="to" required placeholder="Enter destination city" />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" required min={new Date().toISOString().split("T")[0]} />
            </div>
            <button type="submit" className="btn search-btn">
              Search Buses
            </button>
          </form>
        </div>
      </section>

      <section className="trending-offers">
        <h2>Trending Offers</h2>
        <div className="offer-container">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <h3>{offer.title}</h3>
              <p>
                Use code: <span className="offer-code">{offer.code}</span>
              </p>
              <p>Expires: {new Date(offer.expiry).toLocaleDateString()}</p>
              <button className="btn offer-btn">Book Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="gov-bus-tickets">
        <h2>Government Bus Tickets</h2>
        <p>Book reliable and affordable government bus services across India</p>
        <div className="gov-bus-container">
          {govBuses.map((bus) => (
            <div key={bus.id} className="gov-bus-card">
              <div className="gov-bus-icon">🚌</div>
              <h3>{bus.name}</h3>
              <div className="gov-bus-stats">
                <div className="stat">
                  <span className="stat-value">{bus.routes}</span>
                  <span className="stat-label">Routes</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{bus.fleetSize}</span>
                  <span className="stat-label">Buses</span>
                </div>
              </div>
              <button className="btn gov-bus-btn">Explore Routes</button>
            </div>
          ))}
        </div>
      </section>

      <div className="container">
        <h2>Welcome to BUSMAN</h2>
        <p>Your one-stop solution for e-bus management.</p>
        <button className="btn">Learn More</button>
      </div>
    </div>
  )
}

export default Home

