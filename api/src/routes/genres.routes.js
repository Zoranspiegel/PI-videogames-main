const { Router } = require("express");
const router = Router();
const genresBulkCreate = require("../middlewares/genresBulkC.middleware");
const { getGenres } = require("../controllers/genres.controllers");

router.get("/", genresBulkCreate, getGenres);

module.exports = router;