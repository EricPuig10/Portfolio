import styled from "styled-components";

export const ButtonToTop = styled.button`
position: fixed;
z-index: 2;
background: linear-gradient(115deg, #008ac1, #335ec3, #8a009c, #e11fc4);
width:50px;
height: 50px;
top: 90%;
left: 95%;
border-radius: 50%;
color: white;
cursor: pointer;
@media (max-width: 830px){
    top:92%;
    left:92%;
}
@media (max-width: 450px){
    top:92%;
    left:85%;
}
`