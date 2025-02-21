const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, required: true, enum: ["user", "driver", "admin"] },
    license: {
      type: String,
      required: function () {
        return this.role === "driver"
      },
    },
  },
  {
    timestamps: true,
  },
)

const User = mongoose.model("User", userSchema)

module.exports = User

