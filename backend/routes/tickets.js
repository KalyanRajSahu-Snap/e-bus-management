const router = require("express").Router()
const Ticket = require("../models/ticket.model")

router.route("/").get((req, res) => {
  Ticket.find()
    .then((tickets) => res.json(tickets))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
  const userId = req.body.userId
  const busId = req.body.busId
  const date = Date.parse(req.body.date)

  const newTicket = new Ticket({
    userId,
    busId,
    date,
  })

  newTicket
    .save()
    .then(() => res.json("Ticket booked!"))
    .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router

