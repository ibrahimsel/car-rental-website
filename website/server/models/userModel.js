const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add a firstname"],
    },
    lastName: {
      type: String,
      required: [true, "Please add a lastname"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    currentCar: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    rentalHistory: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    }

  },
);

module.exports = mongoose.model("User", userSchema);
