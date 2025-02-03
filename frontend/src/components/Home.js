import "./Home.css"

function Home() {
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
      <div className="container">
        <h2>Welcome to BUSMAN</h2>
        <p>Your one-stop solution for e-bus management.</p>
        <button className="btn">Learn More</button>
      </div>
    </div>
  )
}

export default Home

