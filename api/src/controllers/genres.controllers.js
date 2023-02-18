const { Genre } = require("../db");

const getGenres = async (req, res) => {
  try {
    const dbGenres = await Genre.findAll();
    res.status(200).json(dbGenres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { getGenres };