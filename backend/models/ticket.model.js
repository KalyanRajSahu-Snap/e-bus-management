const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ticketSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    busId: { type: Schema.Types.ObjectId, ref: "Bus", required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
)

const Ticket = mongoose.model("Ticket", ticketSchema)

module.exports = Ticket

