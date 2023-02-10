const { Videogame, Genre } = require("../db");
module.exports = async () => {
  const dbVideogames = await Videogame.findAll({
    attributes: ["id","name","image","rating"],
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
  return dbVideogames;
};
