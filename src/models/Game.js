const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    genre: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      required: true
    },
    releaseYear: {
      type: Number
    },
    rating: {
      type: Number,
      min: 0,
      max: 10
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", gameSchema);