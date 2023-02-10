require("dotenv").config();
const { API_URL, API_KEY } = process.env;
const axios = require("axios");

module.exports = async () => {
    let url = `${API_URL}/games?key=${API_KEY}`;
    const rawApiVGames = [];
    async function axiosGet() {
        const axiosRes = await axios.get(url, { headers: { "accept-encoding": "*" } });
        rawApiVGames.push(axiosRes.data.results);
        url = axiosRes.data.next;
    }
    for (let c = 1; c <= 5; c++) {
        await axiosGet();
    };
    const apiVideogames = rawApiVGames.flat().map(vg => {
        return {
            id: vg.id,
            name: vg.name,
            image: vg.background_image,
            rating: vg.rating,
            genres: vg.genres.map((g) => {
                return { name: g.name };
            }),
        };
    })

    return apiVideogames;
}