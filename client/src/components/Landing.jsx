import StyledLanding from "./styles/StyledLanding";
import React from "react";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();
  return (
    <StyledLanding>
      <button
        onClick={() => {
          history.push("/home");
        }}>
        <p>START</p>
      </button>
      <br />
      <p className="start">PRESS START</p>
    </StyledLanding>
  );
}

export default Landing;
