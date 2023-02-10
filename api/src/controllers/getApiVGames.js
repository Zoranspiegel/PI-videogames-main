require("dotenv").config();
const { API_URL, API_KEY } = process.env;
const axios = require("axios");

module.exports = async () => {
  const apiPages = [1, 2, 3, 4, 5].map((p) => {
    return `${API_URL}/games?key=${API_KEY}&page=${p}`;
  });
  async function axiosGet(page) {
    return await axios.get(page, { headers: { "accept-encoding": "*" } });
  }
  const axiosGetAll = apiPages.map((p) => {
    return axiosGet(p);
  });
  const rawApiVideogames = await Promise.all(axiosGetAll);
  const apiVideogames = rawApiVideogames
    .map((pg) => pg.data.results)
    .flat()
    .map((vg) => {
      return {
        id: vg.id,
        name: vg.name,
        image: vg.background_image,
        rating: vg.rating,
        genres: vg.genres.map((g) => {
          return { name: g.name };
        }),
      };
    });
  return apiVideogames;
};
