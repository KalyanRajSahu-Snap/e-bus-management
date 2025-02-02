const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose.connect("mongodb://localhost/e-bus-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection
connection.once("open", () => {
  console.log("MongoDB database connection established successfully")
})

// Routes
const userRouter = require("./routes/users")
const busRouter = require("./routes/buses")
const ticketRouter = require("./routes/tickets")

app.use("/api/users", userRouter)
app.use("/api/buses", busRouter)
app.use("/api/tickets", ticketRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})

