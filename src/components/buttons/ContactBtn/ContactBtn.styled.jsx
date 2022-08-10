import styled from "styled-components";

export const ContactBtn = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-left: 10%;
  padding-right: 10%;
  height: 50%;
  color: #efe7e7;
  background: linear-gradient(115deg, #008ac1, #335ec3, #8a009c, #e11fc4);
  border: none;
  border-radius: 2vw;
  cursor: pointer;
  font-size: 1em;
  transition: box-shadow 500ms ease-in-out, color 500ms ease-in-out;
  &:hover {
    box-shadow: 0 0 40px 40px #8a009c inset;
  }
`;
