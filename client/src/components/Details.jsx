import { useDispatch, useSelector } from "react-redux";
import { getDetails, clearDetails } from "../redux/actions";
import { useParams } from "react-router-dom";
import StyledDetails from "./styles/StyledDetails";
import Loader from "./Loader";
import parse from "html-react-parser";
import React from "react";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  ////////////////////////
  React.useEffect(() => {
    dispatch(getDetails(id));
  }, []);
  ////////////////////////
  React.useEffect(() => {
    return () => dispatch(clearDetails());
  }, []);
  const vg = useSelector((state) => state.details);
  /////////////
  if(vg.name){
    return (
        <StyledDetails>
          <div className='card'>
            <h1>{vg.name}</h1>
            <img src={vg.image} alt={vg.name} />
            <div className="content">
              <h3><b>Genres</b></h3>
              <p style={{color: "yellow"}}>{vg.genres.map((g) => g.name).join(", ")}</p>              
              <h3><b>Released Date</b></h3>
              <p style={{color: "yellow"}}>{vg.released}</p>
              <h3><b>Platforms</b></h3>
              <p style={{color: "yellow"}}>{vg.platforms}</p>
              <h3><b>Rating</b></h3>
              <p style={{color: "yellow"}}>{vg.rating}</p>
              <div>{parse(vg.description)}</div>
            </div>
          </div>
        </StyledDetails>
      );
  }else{
    return(
        <Loader/>
    )
  }  
}

export default Details;
