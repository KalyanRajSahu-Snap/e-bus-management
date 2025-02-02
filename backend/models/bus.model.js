const mongoose = require("mongoose")

const Schema = mongoose.Schema

const busSchema = new Schema(
  {
    busNumber: { type: String, required: true, unique: true, trim: true },
    route: { type: String, required: true },
    capacity: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
)

const Bus = mongoose.model("Bus", busSchema)

module.exports = Bus

