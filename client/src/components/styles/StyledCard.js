import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 400px;
  margin: 0;
  border: 5px solid red;
  border-radius: 10px;
  border-style: outset;
  margin-top: 20px;
  background-color: rgb(30, 30, 30);
  text-align: center;
  /* animation: colorfull 4s linear infinite;
    @keyframes colorfull {
      0% {
        box-shadow: 4px 4px 30px rgba(0,0,255,0.3), -4px -4px 30px rgba(0,0,255,0.3), -4px 4px 30px rgba(0,0,255,0.3),
          4px -4px 30px rgba(0,0,255,0.3);
      }
      25%{
        box-shadow: 4px 4px 30px rgba(0,255,0,0.3), -4px -4px 30px rgba(0,255,0,0.3), -4px 4px 30px rgba(0,255,0,0.3),
          4px -4px 30px rgba(0,255,0,0.3);
      }
      75% {
        box-shadow: 4px 4px 30px rgba(255,0,0,0.3), -4px -4px 30px rgba(255,0,0,0.3), -4px 4px 30px rgba(255,0,0,0.3),
          4px -4px 30px rgba(255,0,0,0.3);
      }
      100% {
        box-shadow: 4px 4px 30px rgba(0,0,255,0.3), -4px -4px 30px rgba(0,0,255,0.3), -4px 4px 30px rgba(0,0,255,0.3),
          4px -4px 30px rgba(0,0,255,0.3);
      }
    } */
  :hover {
    margin-top: 10px;
  }
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 15px;
  }

  .header {
    display: flex;
    flex-direction: column;
    border-radius: 8px 8px 0 0;
    background-color: black;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
  }

  .imgVGame {
    border-radius: 0 0 8px 8px;
    background-position: center;
    background-size: cover;
    height: 100%;
  }
  .link{
    text-decoration: none;
    color: red;
    :hover {
      color: white;
      text-shadow: 3px 3px 5px red, -3px -3px 5px red, -3px 3px 5px red, 3px -3px 5px red;
    }
  }
`;

export default StyledCard;
