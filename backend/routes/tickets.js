const express = require("express")

module.exports = (db) => {
  const router = express.Router()

  router.get("/", async (req, res) => {
    try {
      const ticketsCollection = db.collection("tickets")
      const tickets = await ticketsCollection.find().toArray()
      res.json(tickets)
    } catch (err) {
      res.status(400).json("Error: " + err)
    }
  })

  router.post("/add", async (req, res) => {
    try {
      const { userId, busId, date } = req.body
      const ticketsCollection = db.collection("tickets")

      const newTicket = {
        userId,
        busId,
        date: new Date(date),
      }

      const result = await ticketsCollection.insertOne(newTicket)
      res.json("Ticket booked!")
    } catch (err) {
      res.status(400).json("Error: " + err)
    }
  })

  return router
}

