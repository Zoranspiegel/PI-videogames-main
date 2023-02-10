import React from "react";
import StyledSearch from "./styles/StyledSearch";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchVGames } from "../redux/actions";

function Search() {
  const [search, setSearch] = React.useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(searchVGames(search));
    setSearch("");
    history.push("/home");
  };
  return (
    <StyledSearch>
      <input
        type='search'
        value={search}
        placeholder='title name...'
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </StyledSearch>
  );
}

export default Search;
