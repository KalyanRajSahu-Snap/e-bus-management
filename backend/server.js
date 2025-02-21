const express = require("express")
const { MongoClient } = require("mongodb")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri)

async function startServer() {
  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db("busman")

    // Routes
    const userRouter = require("./routes/users")(db)
    const busRouter = require("./routes/buses")(db)
    const ticketRouter = require("./routes/tickets")(db)

    app.use("/api/users", userRouter)
    app.use("/api/buses", busRouter)
    app.use("/api/tickets", ticketRouter)

    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`)
    })
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
  }
}

startServer()

