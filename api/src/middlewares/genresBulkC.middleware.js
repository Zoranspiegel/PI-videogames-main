require("dotenv").config();
const { API_URL, API_KEY } = process.env;
const axios = require("axios");
const { Genre } = require("../db");

let gate = true;
module.exports = async (req, res, next) => {
  if (gate) {
    try {
      const axiosResponse = await axios.get(`${API_URL}/genres?key=${API_KEY}`, { headers: { "accept-encoding": "*" } });
      const apiGenres = axiosResponse.data.results.map(g => {
        return {
          id: g.id,
          name: g.name,
        }
      }).sort((a, b) => a.id - b.id);
      await Genre.bulkCreate(apiGenres);
      gate = false;
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  next();
}