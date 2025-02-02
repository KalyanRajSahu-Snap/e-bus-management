function BookTicket() {
    return (
      <div className="container">
        <h2>Book a Ticket</h2>
        <form>
          <div>
            <label htmlFor="from">From:</label>
            <input type="text" id="from" name="from" required />
          </div>
          <div>
            <label htmlFor="to">To:</label>
            <input type="text" id="to" name="to" required />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />
          </div>
          <button type="submit" className="btn">
            Book Now
          </button>
        </form>
      </div>
    )
  }
  
  export default BookTicket
  
  