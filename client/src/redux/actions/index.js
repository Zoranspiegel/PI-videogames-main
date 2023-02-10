import axios from "axios";

export const GET_GENRES = "GET_GENRES";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const SEARCH_VGAMES = "SEARCH_VGAMES";
export const CLEAR_SEARCH = "CLEAN_SEARCH";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAR_DETAILS = "CLEAR_DETAILS";
export const FILTER_VGAMES = "FILTER_VGAMES";
export const CLEAR_MODVGAMES = "CLEAR_MODVGAMES";

export const getGenres = () => (dispatch) => {
  return axios
    .get(`https://pi-videogames-main-production-71c7.up.railway.app/genres`)
    .then((r) => dispatch({ type: GET_GENRES, payload: r.data }));
};

export const getVideogames = () => (dispatch) => {
  return axios
    .get(`https://pi-videogames-main-production-71c7.up.railway.app/videogames`)
    .then((r) => dispatch({ type: GET_VIDEOGAMES, payload: r.data }));
};

export const searchVGames = (name) => (dispatch) => {
  return axios
    .get(`https://pi-videogames-main-production-71c7.up.railway.app/videogames?name=${name}`)
    .then((r) => dispatch({ type: SEARCH_VGAMES, payload: r.data }));
};

export const clearSearch = () => {
  return { type: CLEAR_SEARCH };
};

export const getDetails = (id) => (dispatch) => {
  axios
    .get(`https://pi-videogames-main-production-71c7.up.railway.app/videogames/${id}`)
    .then((r) => dispatch({ type: GET_DETAILS, payload: r.data }));
};

export const clearDetails = () => {
  return { type: CLEAR_DETAILS };
};

export const filterVGames = (array) => {
  return { type: FILTER_VGAMES, payload: array };
}

export const clearModVGames = () => {
  return { type: CLEAR_MODVGAMES }
}