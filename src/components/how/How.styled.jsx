import styled from "styled-components";

export const SecondDiv = styled.div`
  /* background-color: white; */
  padding-top: 5%;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HowIWorkDiv = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  width: 20%;
  height: 90%;
  position: relative;
  border-radius: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  @media (max-width: 450px) {
    width: 80%;
    height: 30%;
    align-self: center;
  }
`;
export const ImageHowDiv = styled.div`
  position: absolute;
  width: 20%;
  height: 50%;
  top: -25%;
  left: 40%;

`;

export const ImageHow = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0px 15px 30px rgb(255, 0, 238));
`;


export const TitleHow = styled.h3`
  width: 100%;
  font-weight: 100;
  font-size: 1em;
  @media (max-width: 450px) {
    font-size: 1.2em;
  }
`;
export const TextHow = styled.h4`
  width: 100%;
  font-size: 0.8em;
`;
