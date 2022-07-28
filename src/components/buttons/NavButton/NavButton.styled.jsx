import styled from "styled-components";

export const NavBtn = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-left: 2%;
  padding-right: 2%;
  height: 50%;
  background-color: transparent;
  color: #efe6e6;
  border: none;
  border-radius: var(--main-border-radius);
  font-size: 1em;
  cursor: pointer;
  transition: box-shadow 1000ms ease-in-out, color 1000ms ease-in-out;
  &:hover {
    background: linear-gradient(45deg, #008ac1, #335ec3, #8a009c, #e11fc4);
    box-shadow: 0 0 40px 40px #8a009c inset;
  }
`;
