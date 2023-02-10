require("dotenv").config();
const {API_URL, API_KEY} = process.env;
const axios = require("axios");

module.exports = async(search) => {
    const rawFoundApiVGames = await axios.get(`${API_URL}/games?key=${API_KEY}&search=${search}`,{ headers: { "accept-encoding":"*" } });
    const foundApiVGames = rawFoundApiVGames.data.results.map(vg => {
        return {
            id: vg.id,
            name: vg.name,
            image: vg.background_image,
            genres: vg.genres.map(g=>{return{name:g.name}})
        }
    })
    return foundApiVGames;
} 