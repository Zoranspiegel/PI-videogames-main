require("dotenv").config();
const { API_URL, API_KEY } = process.env;
const axios = require("axios");
const { Genre } = require("../db");
let flag = true;

module.exports = async (req, res, next) => {
  if (flag) {
    const rawApiGenres = await axios.get(`${API_URL}/genres?key=${API_KEY}`,{ headers: { "accept-encoding":"*" } });
    const apiGenres = rawApiGenres.data.results
      .map((g) => {
        return { id: g.id, name: g.name };
      })
      .sort((a, b) => a.id - b.id);
    await Genre.bulkCreate(apiGenres);
    flag = false;
  }
  next();
};
