import StyledCard from "./styles/StyledCard";
import React from "react";
import { NavLink } from "react-router-dom";

function Card({ id, name, image, genres }) {
  return (
    <StyledCard>
      <div className='header'>
        <NavLink to={`/details/${id}`} className="link" activeClassName="aLink"><h2>{name}</h2></NavLink>        
        <p>{genres.map((g) => g.name).join(", ")}</p>
      </div>
      <div
        className='imgVGame'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </StyledCard>
  );
}

export default Card;
