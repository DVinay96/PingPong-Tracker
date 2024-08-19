const Matches = require("../models/matches");

const getMatches = async (req, res) => {
  try {
    const matches = await Matches.find({});
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postMatches = async (req, res) => {
  try {
    const matches = await Matches.create(req.body);
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMatches,
  postMatches,
};
