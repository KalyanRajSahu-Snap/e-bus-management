import "./BookTicket.css"

function BookTicket() {
  return (
    <div className="book-ticket">
      <section className="hero">
        <h1>Book Your Bus Ticket</h1>
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
            <div className="form-group">
              <label htmlFor="passengers">Passengers:</label>
              <input type="number" id="passengers" name="passengers" required min="1" max="10" defaultValue="1" />
            </div>
            <button type="submit" className="btn search-btn">
              Search Buses
            </button>
          </form>
        </div>
      </section>
      <div className="container">
        <h2>Why Choose BUSMAN?</h2>
        <ul className="features-list">
          <li>Wide network of bus routes across India</li>
          <li>Easy and secure online booking</li>
          <li>24/7 customer support</li>
          <li>Comfortable and safe travel experience</li>
        </ul>
      </div>
    </div>
  )
}

export default BookTicket

