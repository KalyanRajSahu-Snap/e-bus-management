const express = require("express")
const bcrypt = require("bcrypt")

module.exports = (db) => {
  const router = express.Router()

  router.post("/signup", async (req, res) => {
    try {
      const { username, email, password, role, license } = req.body
      const usersCollection = db.collection("users")

      // Check if user already exists
      const existingUser = await usersCollection.findOne({ $or: [{ username }, { email }] })
      if (existingUser) {
        return res.status(400).json({ message: "Username or email already exists" })
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      // Create new user object
      const newUser = {
        username,
        email,
        password: hashedPassword,
        role,
        license: role === "driver" ? license : undefined,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      // Insert the new user into the database
      const result = await usersCollection.insertOne(newUser)

      res.status(201).json({ message: "User created successfully", userId: result.insertedId })
    } catch (error) {
      console.error("Error in user signup:", error)
      res.status(500).json({ message: "Error creating user" })
    }
  })

  return router
}

