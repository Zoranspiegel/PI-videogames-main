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
    .get(`http://localhost:3001/genres`)
    .then((r) => dispatch({ type: GET_GENRES, payload: r.data }));
};

export const getVideogames = () => (dispatch) => {
  return axios
    .get(`http://localhost:3001/videogames`)
    .then((r) => dispatch({ type: GET_VIDEOGAMES, payload: r.data }));
};

export const searchVGames = (name) => (dispatch) => {
  return axios
    .get(`http://localhost:3001/videogames?name=${name}`)
    .then((r) => dispatch({ type: SEARCH_VGAMES, payload: r.data }));
};

export const clearSearch = () => {
  return { type: CLEAR_SEARCH };
};

export const getDetails = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3001/videogames/${id}`)
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