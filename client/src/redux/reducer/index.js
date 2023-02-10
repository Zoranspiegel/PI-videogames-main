import {
  GET_GENRES,
  GET_VIDEOGAMES,
  SEARCH_VGAMES,
  CLEAR_SEARCH,
  GET_DETAILS,
  CLEAR_DETAILS,
  FILTER_VGAMES,
  CLEAR_MODVGAMES,
  
} from "../actions";

const initialState = {
  genres: [],
  videogames: [],
  modVGames: [],
  search: [],
  details: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES:
      return { ...state, genres: action.payload };
    case GET_VIDEOGAMES:
      return { ...state, videogames: action.payload };
    case SEARCH_VGAMES:
      return { ...state, search: action.payload };
    case CLEAR_SEARCH:
      return { ...state, search: [] };
    case GET_DETAILS:
      return { ...state, details: action.payload };
    case CLEAR_DETAILS:
      return { ...state, details: {} };
    case FILTER_VGAMES:
      return { ...state, modVGames: action.payload };
    case CLEAR_MODVGAMES:
      return { ...state, modVGames: []}
    default:
      return { ...state };
  }
};

export default rootReducer;
