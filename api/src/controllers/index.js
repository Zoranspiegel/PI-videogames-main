const getDbVGames = require("./getDbVGames");
const getApiVGames = require("./getApiVGames")
const searchDbVGames= require("./searchDbVGames");
const searchApiVGames = require("./searchApiVGames");
const findApiVGame = require("./findApiVGame");
const findDbVGame = require("./findDbVGame");
const getApiVGamesNoPromiseAll = require("./getApiVGamesNoPromiseAll");
module.exports = {
    getDbVGames,
    getApiVGames,
    searchDbVGames,
    searchApiVGames,
    findApiVGame,
    findDbVGame,
    getApiVGamesNoPromiseAll,
}