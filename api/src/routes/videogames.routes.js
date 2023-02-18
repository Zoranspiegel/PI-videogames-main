const { Router } = require("express");
const router = Router();
const genresBulkCreate = require("../middlewares/genresBulkC.middleware");
const validatePostVG = require("../middlewares/validatePostVG.middleware");
const {
  getSearchVgames,
  getVideogames,
  findVGamesById,
  postVideogame
} = require("../controllers/videogames.controllers");

router.get("/", genresBulkCreate, getSearchVgames, getVideogames);

router.get("/:id", genresBulkCreate, findVGamesById);

router.post("/", genresBulkCreate, validatePostVG, postVideogame);

module.exports = router;