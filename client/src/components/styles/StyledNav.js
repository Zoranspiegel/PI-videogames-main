import styled from "styled-components";

const StyledNav = styled.div`
  position: fixed;
  display: flex;
  width: 90%;
  padding: 10px 5%;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  :before {
    content: "";
    position: absolute;
    top: 0px;
    left: -20px;
    bottom: -10px;
    right: -20px;
    background-color: blue;
    z-index: -1;
    filter: blur(30px);
  }
  :after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background-color: rgb(20, 20, 20);
    z-index: -1;
  }
  h1 {
    position: relative;
    top: 5px;
    margin: 0;
    filter: blur(0.4px);
    white-space: nowrap;
    text-shadow: -10px -6px 8px red, 10px 6px 8px red, 20px -6px 8px red,
      30px 6px 8px red, 40px -6px 8px red, 70px 6px 8px red;
  }
  h2 {
    margin: 0;
    filter: blur(0.4px);
    white-space: nowrap;
  }
  .title {
    color: white;
    display: flex;
    gap: 10px;
  }
  .link {
    text-decoration: none;
    color: rgb(94, 214, 24);
    text-shadow: green 4px 4px 4px, green -4px -4px 4px, green 4px -4px 4px,
      green -4px 4px 4px;
    :hover {
      color: white;
    }
  }
  .aLink {
    color: white;
    font-size: 18px;
    text-shadow: green 10px 6px 2px, green -10px -6px 2px, green 10px -6px 2px,
      green -10px 6px 2px, green 12px 8px 10px, green -12px -8px 10px,
      green 12px -8px 10px, green -12px 8px 10px;
  }
  @media (max-width: 580px) {
    flex-direction: column;
    .aLink {
      color: white;
      font-size: 13px;
    }
  }
`;

export default StyledNav;
