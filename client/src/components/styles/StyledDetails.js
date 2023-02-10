import styled from "styled-components";

const StyledDetails = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 50px;
    border: 5px solid red;
    border-radius: 20px;
    border-style: ridge;
    padding-bottom: 30px;
    width: 70vw;
    height: 100%;
    color: white;
    background-color: black;
    text-align: center;
    animation: colorfull 4s linear infinite;
    @keyframes colorfull {
      0% {
        box-shadow: 4px 4px 30px rgba(0, 0, 255, 0.2),
          -4px -4px 30px rgba(0, 0, 255, 0.2),
          -4px 4px 30px rgba(0, 0, 255, 0.2), 4px -4px 30px rgba(0, 0, 255, 0.2);
      }
      25% {
        box-shadow: 4px 4px 30px rgba(0, 255, 0, 0.2),
          -4px -4px 30px rgba(0, 255, 0, 0.2),
          -4px 4px 30px rgba(0, 255, 0, 0.2), 4px -4px 30px rgba(0, 255, 0, 0.2);
      }
      75% {
        box-shadow: 4px 4px 30px rgba(255, 0, 0, 0.2),
          -4px -4px 30px rgba(255, 0, 0, 0.2),
          -4px 4px 30px rgba(255, 0, 0, 0.2), 4px -4px 30px rgba(255, 0, 0, 0.2);
      }
      100% {
        box-shadow: 4px 4px 30px rgba(0, 0, 255, 0.2),
          -4px -4px 30px rgba(0, 0, 255, 0.2),
          -4px 4px 30px rgba(0, 0, 255, 0.2), 4px -4px 30px rgba(0, 0, 255, 0.2);
      }
    }
    h1 {
      margin-top: 40px;
      padding: 0 20px;
      color: white;
      text-shadow: green 10px 6px 2px, green -10px -6px 2px, green 10px -6px 2px,
      green -10px 6px 2px, green 12px 8px 10px, green -12px -8px 10px,
      green 12px -8px 10px, green -12px 8px 10px;
    }
    img {
      width: 50%;
      box-shadow: rgba(0,255,0,0.2) 4px 4px 4px, rgba(0,255,0,0.2) -4px -4px 4px, rgba(0,255,0,0.2) 4px -4px 4px,
        rgba(0,255,0,0.2) -4px 4px 4px;
        border-radius: 15px;
      /* height: 48vh;
      object-fit: cover;
      object-position: top; */
    }
    .content {
      height: 30%;
      padding: 0px 30px 0 30px;
      color: rgb(94, 214, 24);
      h3 {
        color: white;
        text-shadow: green 4px 4px 4px, green -4px -4px 4px, green 4px -4px 4px,
          green -4px 4px 4px;
      }
      p {
        font-size: 15px;
      }
    }
  }
  @media (max-width: 580px) {
    .card {
      margin-top: 120px;
    }
  }
`;

export default StyledDetails;
