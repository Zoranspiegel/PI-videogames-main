const { Videogame, Genre } = require("../db");
module.exports = async (id) => {
  try {
    const dbVGameDetais = await Videogame.findByPk(id, {
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
    return dbVGameDetais;
  } catch (error) {
    return null;
  }
};
