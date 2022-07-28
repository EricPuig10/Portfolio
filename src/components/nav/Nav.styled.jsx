import styled from "styled-components";

export const NavDiv = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(40, 24, 112, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
`;

export const DivLogo = styled.div`
  //background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
  background-color: transparent;
`;

export const DivNavButtons = styled.div`
  //background-color: blue;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const DivNavContact = styled.div`
  //background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 98%;
  object-fit: scale-down;
  cursor: pointer;
`;

export const LogoTxt = styled.h1`
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 2em;
`;
