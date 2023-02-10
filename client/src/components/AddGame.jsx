import StyledAddGame from "./styles/StyledAddGame";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../redux/actions";
import { useHistory } from "react-router-dom";
import validate from "./validations/validateAddVGame";
import axios from "axios";

const initialState = {
  name: "",
  description: "",
  platforms: "",
  rating: 0,
  genres: [],
};

function AddGame() {
  const [input, setInput] = React.useState(initialState);
  const [errors, setErrors] = React.useState({ red: true });
  /////////////////////////////////////////////////////////
  const history = useHistory();
  const globalGenres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  let redLight = errors.red;
  ////////////////////////////
  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(validate({ ...input, [e.target.name]: e.target.value }));
  };
  /////////////////////////////
  const handleGenres = (e) => {
    e.preventDefault();
    const id = parseInt(e.target.id);
    if (!input.genres.includes(id)) {
      setInput((prev) => ({
        ...prev,
        genres: [...prev.genres, id],
      }));
      setErrors(validate({ ...input, genres: [...input.genres, id] }));      
    } else {
      setInput((prev) => ({
        ...prev,
        genres: prev.genres.filter((g) => g !== id),
      }));
      setErrors(
        validate({ ...input, genres: input.genres.filter((g) => g !== id) })
      );
    }
  };
  //////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://pi-videogames-main-production-71c7.up.railway.app/videogames", input)
    .then((r) => {
      dispatch(getVideogames());
      history.push(`/details/${r.data.id}`);
    })
    .catch(error => alert(error.message))
  };
  //RENDER//////////////////////////
  return (
    <StyledAddGame>
      <form onSubmit={handleSubmit}>

        {/* NAME */}
        <p className={errors.name ? "redText" : null}>Name</p>
        <span className='error'>&nbsp;{errors.name}</span>
        <input
          type='text'
          name='name'
          value={input.name}
          placeholder='Title name...'
          onChange={handleInput}
          className={errors.name ? "redBox" : null}
        />

        {/* DESCRIPTION */}
        <p className={errors.description ? "redText" : null}>Description</p>
        <span className='error'>&nbsp;{errors.description}</span>
        <textarea
          name='description'
          value={input.description}
          placeholder='Title description...'
          onChange={handleInput}
          className={errors.name ? "redBox" : null}
        />

        {/* RELEASED_DATE */}
        <p>Released Date</p>
        <input type='date' name='released' onChange={handleInput} />
        <span className="info">&nbsp;{!input.released && `Today by default!`}</span>

        {/* PLATFORMS */}
        <p className={errors.platforms ? "redText" : null}>Platforms</p>
        <span className='error'>&nbsp;{errors.platforms}</span>
        <input
          type='text'
          name='platforms'
          value={input.platforms}
          placeholder='Title platforms...'
          onChange={handleInput}
          className={errors.platforms ? "redBox" : null}
        />

        {/* RATING */}
        <p className={errors.rating ? "redText" : null}>Rating</p>
        <span className='error'>&nbsp;{errors.rating}</span>
        <input
          type='number'
          step="0.1"
          name='rating'
          vaulue={input.rating}
          placeholder="Default value will be 0..."
          onChange={handleInput}
          className={errors.name ? "redBox" : null}
        />

        {/* GENRES */}
        <p className={errors.genres ? "redText" : null}>Genres</p>
        <span className='error'>&nbsp;{errors.genres}</span>
        <br />
        <div className='genres'>
          {globalGenres.length > 0 &&
            globalGenres.map((g) => (
              <button
                key={g.id}
                className={
                  input.genres.includes(g.id) ? "pressed" : "unpressed"
                }
                id={g.id}
                onClick={handleGenres}>
                {g.name}</button>
          ))}
        </div>
        {/* SUBMIT */}
        <button disabled={redLight} className='submit'>
          Create!
        </button>
      </form>
    </StyledAddGame>
  );
}

export default AddGame;
