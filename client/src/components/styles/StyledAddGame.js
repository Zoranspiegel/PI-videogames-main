import styled from "styled-components";

const StyledAddGame = styled.div`
  position: relative;
  top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: yellow;
  span{
    margin: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30vw;
    height: 70%;
    border-radius: 20px;
    background-color: black;
    padding: 40px;
    box-shadow: rgba(0, 0, 255, 0.5) 4px 4px 4px,
      rgba(0, 0, 255, 0.5) -4px -4px 4px, rgba(0, 0, 255, 0.5) 4px -4px 4px,
      rgba(0, 0, 255, 0.5) -4px 4px 4px;
      input{
        border-radius: 5px;
      }
    .genres {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    .unpressed {
      font-weight: 600;
      border: 0px;
      border-radius: 10px;
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
    .pressed {
      font-weight: 600;
      border: 0px;
      border-radius: 10px;
      background-color: red;
      color: rgb(125, 02, 02);
      box-shadow: 1px 1px rgb(125, 02, 02);
      transform: translateY(3px);
      :hover {
        color: black;
        background-color: brown;
        box-shadow: 1px 1px rgb(125, 02, 02);
      }
    }
    .submit {
      margin-top: 20px;
      background-color: red;
      border: 0;
      border-radius: 10px;
      box-shadow: 1px 4px rgb(125, 02, 02);
      color: rgb(125, 02, 02);
      :hover {
        background-color: brown;
        box-shadow: 1px 4px rgb(125, 02, 02);
      }
      :active {
        box-shadow: 1px 1px rgb(125, 02, 02);
        transform: translateY(3px);
      }
      :disabled {
        color: rgb(70, 70, 70);
        background-color: rgb(150, 150, 150);
        box-shadow: 1px 4px rgb(100, 100, 100);
        :active {
          transform: none;
        }
      }
    }
  }
  .redText {
    color: white;
    text-shadow: red 10px 6px 2px, red -10px -6px 2px, red 10px -6px 2px,
      red -10px 6px 2px, red 12px 8px 10px, red -12px -8px 10px,
      red 12px -8px 10px, red -12px 8px 10px;
  }
  .redBox {
    border: 1px solid red;
    box-shadow: rgba(255,0,0,0.2) 4px 4px 4px, rgba(255,0,0,0.2) -4px -4px 4px, rgba(255,0,0,0.2) 4px -4px 4px,
        rgba(255,0,0,0.2) -4px 4px 4px;
  }
  .error{
    margin-bottom: 2px;
    font-size: 12px;
    color: red;
  }
  .info{
    font-size: 12px;
    color: white;
  }
`;

export default StyledAddGame;
