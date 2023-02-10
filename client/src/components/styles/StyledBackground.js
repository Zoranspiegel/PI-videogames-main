import styled from "styled-components";
const StyledBackground = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default StyledBackground;
