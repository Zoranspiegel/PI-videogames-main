require("dotenv").config();
const { API_URL, API_KEY } = process.env;
const { Op } = require("sequelize");
const { Videogame, Genre } = require("../db");
const axios = require("axios");


const getSearchVgames = async (req, res, next) => {
  const { name } = req.query;
  if (name) {
    try {
      ////////////////////////////////////////////////
      const foundDbVGames = await Videogame.findAll({
        attributes: ["id", "name", "image"],
        include: [{
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        }],
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          }
        }
      });
      ////////////////////////////////////////////////////////////////////////////////////////
      const axiosResponse = await axios.get(`${API_URL}/games?key=${API_KEY}&search=${name}`);
      const foundApiVGames = axiosResponse.data.results.map(vg => {
        return {
          id: vg.id,
          name: vg.name,
          image: vg.background_image,
          genres: vg.genres.map(g => { return { name: g.name } })
        }
      });
      ////////////////////////////////////////////////////////////////////////
      const foundVGames = [...foundDbVGames, ...foundApiVGames].slice(0, 15);
      res.status(200).json(foundVGames);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  } else {
    next();
  }
}

const getVideogames = async (req, res) => {
  try {
    ///////////////////////////////////////////
    const dbVGames = await Videogame.findAll({
      attributes: ["id", "name", "image"],
      include: [{
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      }]
    });
    ////////////////////////////////
    const urls = [];
    for (let i = 1; i <= 5; i++) {
      urls.push(axios.get(`${API_URL}/games?key=${API_KEY}&page=${i}`));
    }
    const axiosAllResponses = await Promise.all(urls);
    const apiVGames = axiosAllResponses.map(r => r.data.results).flat().map(vg => {
      return {
        id: vg.id,
        name: vg.name,
        image: vg.background_image,
        genres: vg.genres.map(g => { return { name: g.name } })
      }
    })
    const allGames = [...dbVGames, ...apiVGames].slice(0, 100);
    console.log(allGames.length)
    ////////////////////////////////
    res.status(200).json(allGames);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

const findVGamesById = async (req, res) => {
  const { id } = req.params;
  let notFound = true;
  try {
    const foundDbVGame = await Videogame.findByPk(id, {
      include: [{
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        }
      }]
    });
    if (foundDbVGame) {
      notFound = false;
      res.status(200).json(foundDbVGame);
    }
  } catch (error) { }

  try {
    const axiosResponse = await axios.get(`${API_URL}/games/${id}?key=${API_KEY}`);
    const foundApiVGame = {
      id: axiosResponse.data.id,
      name: axiosResponse.data.name,
      image: axiosResponse.data.background_image,
      description: axiosResponse.data.description,
      release: axiosResponse.data.released,
      rating: Math.floor(axiosResponse.data.rating),
      platforms: axiosResponse.data.platforms.map(p => p.platform.name).join(", "),
      genres: axiosResponse.data.genres.map(g => { return { name: g.name } }),
    };
    if (foundApiVGame) {
      notFound = false;
      res.status(200).json(foundApiVGame)
    }
  } catch (error) { }
  if (notFound) {
    res.status(404).json("Game not found!")
  }
}

const postVideogame = async (req, res) => {
  try {
    const newVGame = await Videogame.create(req.body);
    await newVGame.setGenres(req.body.genres)
    res.status(201).json("Videogame Successfully Created");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getSearchVgames,
  getVideogames,
  findVGamesById,
  postVideogame,
};