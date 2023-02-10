import styled from "styled-components";

const StyledHome = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .clear {
    position: absolute;
    top: -20px;
    margin: 20px;
    border: 0px;
    border-radius: 20px;
    background-color: red;
    box-shadow: 0 4px rgb(125, 02, 02);
    color: rgb(125, 02, 02);
    font-weight: 600;
    :after {
      position: absolute;
      content: "";
      top: -10px;
      left: -10px;
      bottom: -15px;
      right: -10px;
      border-radius: 10px;
      background-color: rgb(50, 50, 50);
      box-shadow: 2px 2px 10px red, -2px -2px 10px red, -2px 2px 10px red,
        2px -2px 10px red;
      z-index: -1;
    }
    :hover {
      background-color: brown;
    }
    :active {
      box-shadow: 0 1px rgb(125, 02, 02);
      transform: translateY(3px);
    }
  }
  .sort_filter {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    .division {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      button {
        background-color: red;
        padding: 5px;
        border: 0;
        border-radius: 2px;
        box-shadow: 1px 4px rgb(125, 02, 02);
        color: rgb(125, 02, 02);
        :hover {
          background-color: brown;
        }
        :active {
          box-shadow: 1px 1px rgb(125, 02, 02);
          transform: translateY(3px);
        }
      }
      .genBtn {
        background-color: rgb(255, 230, 0);
        color: rgb(155, 130, 0);
        box-shadow: 0 4px rgb(155, 130, 0);
        :hover {
          color: black;
          background-color: rgb(165, 140, 0);
          box-shadow: 0 4px rgb(135, 110, 0);
        }
        :active {
          transform: translateY(3px);
          box-shadow: 0 1px;
        }
      }
      .hidden {
        pointer-events: none;
        z-index: -100;
      }
      .restore {
        font-size: 15px;
        margin-top: 10px;
        padding: 0px 8px 1px 7px;
        border-radius: 50%;
        background-color: rgb(255, 230, 0);
        color: rgb(155, 130, 0);
        box-shadow: 0 4px rgb(155, 130, 0);
        :hover {
          color: black;
          background-color: rgb(165, 140, 0);
          box-shadow: 0 4px rgb(135, 110, 0);
        }
        :active {
          transform: translateY(3px);
          box-shadow: 0 1px;
        }
      }
    }
  }
  .deck {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 20px 0px 20px;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }
  .page {
    border: 2px solid green;
    border-radius: 50%;
    background-color: black;
    padding: 5px;
    font-size: 20px;
    box-shadow: 2px 2px 10px green, -2px -2px 10px green, -2px 2px 10px green,
      2px -2px 10px green;
  }
  @media (max-width: 580px) {
    top: 180px;
  }
`;

export default StyledHome;
