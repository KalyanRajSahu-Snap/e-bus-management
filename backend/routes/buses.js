const express = require("express")

module.exports = (db) => {
  const router = express.Router()

  router.get("/", async (req, res) => {
    try {
      const busesCollection = db.collection("buses")
      const buses = await busesCollection.find().toArray()
      res.json(buses)
    } catch (err) {
      res.status(400).json("Error: " + err)
    }
  })

  router.post("/add", async (req, res) => {
    try {
      const { busNumber, route, capacity } = req.body
      const busesCollection = db.collection("buses")

      const newBus = {
        busNumber,
        route,
        capacity: Number(capacity),
      }

      const result = await busesCollection.insertOne(newBus)
      res.json("Bus added!")
    } catch (err) {
      res.status(400).json("Error: " + err)
    }
  })

  return router
}

