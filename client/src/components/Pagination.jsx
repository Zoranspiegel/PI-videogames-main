import { useSelector } from "react-redux";
import StyledPagination from "./styles/StyledPagination";

export default function Pagination({ handlePages, page, limit }) {
  const videogames = useSelector((state) => state.videogames);
  const modVgames = useSelector((state) => state.modVGames);
  let vgs = modVgames.length ? modVgames : videogames;
  let last = Math.ceil(vgs.length / limit);

  ////////////////////////////
  const arrangePages = () => {
    const arr = [];
    for (let p = 1; p <= last; p++) {
      arr.push(p);
    }
    return arr;
  };

  ////////
  return (
    <StyledPagination>

      <button onClick={() => handlePages(page - 1)} className={page > 0 ? "prev" : "hidden"}>
        &#9664;</button>
      
      {arrangePages().map((p, i) => <button key={i} className={page === i ? "redBtn" : null} onClick={() => handlePages(i)}>{p}</button>)}

      <button onClick={() => handlePages(page + 1)} className={page < last - 1 ? "next" : "hidden"}>
        &#9654;</button>

    </StyledPagination>
  );
}

