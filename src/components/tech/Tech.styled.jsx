import styled from "styled-components";

export const CenterDiv = styled.div`
  /* background-color: white; */
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 540px;
  margin-top: 6%;
`;

export const AllTechsDiv = styled.div`
  margin-top: 3%;
  width: 40%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 450px){
    width: 90%;
  }
`;

export const TechDiv = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 120px;
  height: 120px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 0.1%;
  margin-bottom: 2%;
`;

export const TechImg = styled.img`
  width: 70%;
  height: 70%;
  object-fit: cover;
`;

export const TitleTech = styled.h2`
  margin-top: 2%;
  color: white;
  margin-bottom: 0%;
`;
