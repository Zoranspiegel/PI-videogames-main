import styled from "styled-components";

const StyledSearch = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  gap: 1px;
  input{
    padding-left: 10px;
    border-radius: 10px 0 0 10px;
  }
  button {
    background-color: red;
    border: 0;
    border-radius: 0 10px 10px 0;
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
  @media (max-width: 726px){
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 150px;
    input{
        width: 100%;
    }
    button{
        border-radius: 10px 0 0 10px;
    }
  }
  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    input {
        border-radius: 10px;
        width: 200%;
    }
    button{
        border-radius: 10px;
    }
  }
`;

export default StyledSearch;
