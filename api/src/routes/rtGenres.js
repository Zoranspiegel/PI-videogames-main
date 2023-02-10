const { Router } = require("express");
const router = Router();
const { Genre } = require("../db");
const { bulkCreateGenres } = require("../middlewares");

router.get("/", bulkCreateGenres, async (req, res) => {
  try {
    const dbGenres = await Genre.findAll();
    res.json(dbGenres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
