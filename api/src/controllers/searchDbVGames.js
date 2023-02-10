const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");
module.exports = async (search) => {
  const foundDbVGames = await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: search,
      },
    },
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return foundDbVGames;
};
