const mongoose = require("mongoose");

const MatchesSchema = mongoose.Schema(
  {
    player1: {
      type: String,
      required: true,
    },
    player2: {
      type: String,
      required: true,
    },
    winner: {
      type: String,
      required: true,
    },
  },
  {
    timestaps: true,
  }
);

const Matches = mongoose.model("Match", MatchesSchema);

module.exports = Matches;
