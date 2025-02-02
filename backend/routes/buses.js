const router = require("express").Router()
const Bus = require("../models/bus.model")

router.route("/").get((req, res) => {
  Bus.find()
    .then((buses) => res.json(buses))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
  const busNumber = req.body.busNumber
  const route = req.body.route
  const capacity = Number(req.body.capacity)

  const newBus = new Bus({
    busNumber,
    route,
    capacity,
  })

  newBus
    .save()
    .then(() => res.json("Bus added!"))
    .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router

