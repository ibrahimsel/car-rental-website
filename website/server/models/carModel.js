const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    brand: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "available",
    },
  }
  // {
  //   timestamps: true,
  // }
);

module.exports = mongoose.model("Car", carSchema);
