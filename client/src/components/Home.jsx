import StyledHome from "./styles/StyledHome";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearSearch, filterVGames, clearModVGames } from "../redux/actions";
import Card from "./Card";
import Loader from "./Loader";
import Pagination from "./Pagination";

function Home() {
  const [page, setPage] = React.useState(0);
  const LIMIT = 15;
  const dispatch = useDispatch();
  const allVGames = useSelector((state) => state.videogames);
  const searchVGames = useSelector((state) => state.search);
  const modVGames = useSelector((state) => state.modVGames);
  const genres = useSelector((state) => state.genres);
  let videogames = searchVGames.length ? searchVGames : modVGames.length ? modVGames : allVGames;
  ////////////////////////////
  React.useEffect(()=>{
    setPage(0);
  },[searchVGames])
  ////////////////////////////
  const handleClear = () => {
    dispatch(clearSearch());
  };
  ///PAGINATION///////////////////
  const handlePages = (num) => {
    if (num >= 0 && num < Math.ceil(allVGames.length / LIMIT)) {
      setPage(num);
    }
  };
  ///SORT/FILTER/////////////////
  const filterByGenres = (e) => {
    const vGamesByGenre = allVGames.filter(vg => {
      if(vg.genres.find(g => g.name === e.target.id)){
        return true;
      };
    });
    setPage(0);
    dispatch(filterVGames(vGamesByGenre));
  }
  const filterApiVGames = ()=>{
    const apiVGames = allVGames.filter(vg => typeof(vg.id) === "number");
    setPage(0);
    dispatch(filterVGames(apiVGames));
  }
  const filterUserVGames = ()=>{
    const userVGames = allVGames.filter(vg => typeof(vg.id) === "string");
    setPage(0);
    dispatch(filterVGames(userVGames));
  }
  const sortAZ = ()=>{
    const aToZ = [...allVGames].sort((a,b)=> a.name.localeCompare(b.name));
    setPage(0);
    dispatch(filterVGames(aToZ));
  }
  const sortZA = ()=>{
    const zToA = [...allVGames].sort((a,b)=> a.name.localeCompare(b.name)).reverse();
    setPage(0);
    dispatch(filterVGames(zToA));
  }
  const sortRatingDesc = () => {
    const ratingDesc = [...allVGames].sort((a,b) => a.rating - b.rating);
    setPage(0);
    dispatch(filterVGames(ratingDesc));
  }
  const sortRatingAsc = () => {
    const ratingAsc = [...allVGames].sort((a,b) => b.rating - a.rating);
    setPage(0);
    dispatch(filterVGames(ratingAsc));
  }
  /////////////////////////////
  if (videogames.length) {
    return (
      <div>
        <StyledHome>
          {/* SORT/FILTER */}
          <div className="sort_filter">
            <div className="division">
              {(genres.length > 0 && searchVGames.length === 0) && 
              genres.map(g => 
                <button 
                  hidden={g.name === "Card"||g.name === "Educational"||g.name === "Board Games" ? true : false} 
                  key={g.id} id ={g.name}
                  onClick={filterByGenres} 
                  className="genBtn">{g.name}
                </button>)}
            </div>

            <div className="division">
              {searchVGames.length === 0 && <button onClick={filterApiVGames}>Site Games</button>}
              {searchVGames.length === 0 && <button onClick={filterUserVGames}>User Games</button>}
              {searchVGames.length === 0 && <button onClick={sortAZ}>&#10607; a-z</button>}
              {searchVGames.length === 0 && <button onClick={sortZA}>&#10607; z-a</button>}
              {searchVGames.length === 0 && <button onClick={sortRatingDesc}>&#8643; Rating</button>}
              {searchVGames.length === 0 && <button onClick={sortRatingAsc}>&#8639; Rating</button>}
            </div>
            
            <div className="division">
              {searchVGames.length === 0 && <button 
                className={!modVGames.length ? "hidden" : "restore"} 
                onClick={()=>{dispatch(clearModVGames())}}>&#8634;</button>}
            </div>            
          </div>

          {/* TOP_PAGINATION */}
          {searchVGames.length === 0 && <Pagination handlePages={handlePages} page={page} limit={LIMIT}/>}

          {/* CLEAR_SEARCH */}
          {searchVGames.length > 0 && (
            <button onClick={handleClear} className='clear'>
              Clear
            </button>
          )}

          {/* CARDS */}
          <div className='deck'>
            {videogames.slice(page * LIMIT, page * LIMIT + LIMIT).map((vg) => (
              <Card
                key={vg.id}
                id={vg.id}
                name={vg.name}
                genres={vg.genres}
                image={vg.image}
              />
            ))}
          </div>
          <br />
          <br />

          {/* BOTTOM_PAGINATION */}
          {searchVGames.length === 0 && <Pagination handlePages={handlePages} page={page} limit={LIMIT}/>}
          
          <br />
          <br />
        </StyledHome>
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default Home;
