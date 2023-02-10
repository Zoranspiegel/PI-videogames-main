const { Router } = require("express");
const rtGenres = require("./rtGenres");
const rtVideogames = require("./rtVideogames");

const router = Router();

router.use("/genres", rtGenres);
router.use("/videogames", rtVideogames);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
