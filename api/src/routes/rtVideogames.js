const { Router } = require("express");
const router = Router();
const { validatePostVG, bulkCreateGenres } = require("../middlewares");
const {
  getDbVGames,
  getApiVGames,
  searchDbVGames,
  searchApiVGames,
  findApiVGame,
  findDbVGame,
} = require("../controllers");
const { Videogame } = require("../db");

////////////////////////////////////////////////////////
///GET/////////////////////////////////////////////////
router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    //////////// <-- SI HAY req.query.name
    if (name) {
      const n4M3 = `%${name}%`;
      /////////////////////////////////////////////////
      const foundDbVGames = await searchDbVGames(n4M3);
      const foundApiVGames = await searchApiVGames(name);
      const foundVideogames = [...foundDbVGames, ...foundApiVGames].slice(0,15);
      ///RESPONSE///////////////////////
      return res.json(foundVideogames);
    }
    ///////////////////////////////////////// <-- SI NO HAY QUERIES
    const DbVideogames = await getDbVGames();
    const ApiVideogames = await getApiVGames();
    const allVideogames = [...DbVideogames, ...ApiVideogames];
    ///RESPONSE/////////////
    res.json(allVideogames);
    //////////////////
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

////GET:ID///////////////////////////////
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    /////////////////////////////////////////////
    const dbVGameDetails = await findDbVGame(id);
    const apiVGameDetails = await findApiVGame(id);
    //////////////////////////////////////////////////
    if (dbVGameDetails) return res.json(dbVGameDetails);
    if (apiVGameDetails) return res.json(apiVGameDetails);
    //////////////////////////////////////
    throw Error("Videogame not found...");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

//////////////////////////////////////////////////////////////////////////
///POST//////////////////////////////////////////////////////////////////
router.post("/", bulkCreateGenres, validatePostVG, async (req, res) => {
  try {
    const newVideogame = await Videogame.create(req.body);
    newVideogame.setGenres(req.body.genres);
    ///RESPONSE///////////////////////////////////////////////////////
    res.json({ ...newVideogame.dataValues, genres: req.body.genres });
    ////////////////
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
