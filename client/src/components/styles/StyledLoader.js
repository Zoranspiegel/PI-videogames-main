import styled from "styled-components";

const StyledLoader = styled.div`
    background-color: white;
    position: relative;
    top: 40vh;
    left: 40vw;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
    animation: animate 2s linear infinite;
    @keyframes animate {
        0%{
            transform: rotate(0deg);
            filter: hue-rotate(0deg)
        }
        100%{
            transform: rotate(360deg);
            filter: hue-rotate(360deg)
        }
    }
    :before{
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        background-color: black;
        border-radius: 50%;
        z-index: 100;
        
    }
    :after{
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
        border-radius: 50%;
        z-index: 1;
        filter: blur(30px);
    }
`;
export default StyledLoader;