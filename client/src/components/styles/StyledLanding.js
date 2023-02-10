import styled from "styled-components";

const StyledLanding = styled.div`
border-radius: 20px;
  width: 100px;
  height: 100px;
  background-color: rgb(30,30,30);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 45vw;
  justify-content: center;
  align-items: center;
  :before{
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    bottom: -20px;
    right: -20px;
    border-radius: 40px;
    background-color: blue;
    z-index: -1;
    filter: blur(30px);
  }
  :after{
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    bottom: -20px;
    right: -20px;
    border-radius: 40px;
    background-color: rgb(30,30,30);
    z-index: -1;
  }
  p {
    margin: 5px;
  }
  button {
    border: 0px;
    border-radius: 20px;
    background-color: red;
    box-shadow: 0 4px rgb(125, 02, 02);
    color: rgb(125, 02, 02);
    font-weight: 600;
    :hover {
      background-color: brown;
    }
    :active {
      box-shadow: 0 1px rgb(125, 02, 02);
      transform: translateY(3px);
    }
  }
  .start{
    animation: pressStart 1s linear infinite;
  }
  @keyframes pressStart {
    0% { color: rgb(94, 214, 24); }
    33% { color: rgba(94, 214, 24, 0.5); }
    50% { color: rgba(94, 214, 24, 0.0); }
    66% { color: rgba(94, 214, 24, 0.5); }
    100% { color: rgb(94, 214, 24); }
  }
  @media (max-width: 1000px) {
    left: 35vw;
  }
`;

export default StyledLanding;
