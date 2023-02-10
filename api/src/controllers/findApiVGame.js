require("dotenv").config();
const { API_URL, API_KEY } = process.env;
const axios = require("axios");

module.exports = async (id) => {
  try {
    const rawApiFind = await axios.get(`${API_URL}/games/${id}?key=${API_KEY}`,{ headers: { "accept-encoding":"*" } });
    const apiVGameDetails = {
        id: rawApiFind.data.id,
        name: rawApiFind.data.name,
        image: rawApiFind.data.background_image,
        released: rawApiFind.data.released,
        description: rawApiFind.data.description,
        rating: rawApiFind.data.rating,
        platforms: rawApiFind.data.platforms.map(p => p.platform.name).join(", "),
        genres: rawApiFind.data.genres.map(g=>{return{name: g.name}}),
    }
    return apiVGameDetails;
  } catch (error) {
    return null;
  }
};
