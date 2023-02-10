import styled from "styled-components";

const StyledPagination = styled.div`
margin-top: 15px;
display: flex;
gap: 10px;
button{
    border: 0px;
    border-radius: 10px;
    background-color: rgb(255, 230, 0);
    color: rgb(155, 130, 0);
    box-shadow: 0 4px rgb(155, 130, 0);
    :hover{
        color: black;
        background-color: rgb(165, 140, 0);
        box-shadow: 0 4px rgb(135, 110, 0);
    }
    :active{
        transform: translateY(3px);
        box-shadow: 0 1px;
    }
}
.redBtn{
    background-color: red;
    box-shadow: 1px 1px rgb(125, 02, 02);
    color: rgb(125, 02, 02);
    transform: translateY(3px);
    :hover{
        background-color: brown;
        box-shadow: 1px 1px rgb(125, 02, 02);
    }
}
.prev{
    width: 50px;
    border-radius: 10px 3px 3px 10px;
}
.next{
    width: 50px;
    border-radius: 3px 10px 10px 3px;  
}
.hidden{
    width: 50px;
    pointer-events: none;
    z-index: -100;
}
`;

export default StyledPagination;
