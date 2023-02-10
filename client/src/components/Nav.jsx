import StyledNav from "./styles/StyledNav";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { getGenres, getVideogames } from "../redux/actions";
import logo from "../assets/skull.png";

function Nav() {
  const dispatch = useDispatch();
  const location = useLocation();
  ////////////////////////
  React.useEffect(() => {
    dispatch(getGenres());
    dispatch(getVideogames());
  }, []);
  ///////////////////////////////  
  return (
    <StyledNav>
      
      {/* TITLE */}
      <div className='title'>
        <img src={logo} alt="logo" width="40px"/>
        <h1>P14Y3R ZER0</h1>
      </div>

      {/* TO_HOME */}
      {location.pathname !== "/" && (
        <NavLink to='/home' className='link' activeClassName='aLink'>
          <h2>Home!</h2>
        </NavLink>
      )}

      {/* TO_ADD */}
      <NavLink to='/add' className='link' activeClassName='aLink'>
        <h2>Add a Game!</h2>
      </NavLink>
      
      {/* SEARCH_BAR */}
      <Search />

    </StyledNav>
  );
}

export default Nav;
