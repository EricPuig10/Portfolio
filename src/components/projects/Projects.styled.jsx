import styled from "styled-components";

export const TitleProjects = styled.h2`
  margin-top: 6%;
  color: white;
  margin-bottom: 4%;
  @media (max-width: 830px) {
    margin-top: 15%;
    margin-bottom: 10%;
    font-size: 1.4;
  }
  @media (max-width: 450px) {
    margin-top: 35%;
    margin-bottom: 10%;
    font-size: 1.4;
  }
`;

export const CenterDiv = styled.div`
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 540px;
  margin-top: 4%;
`;

export const DivProjectsCont = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 830px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const DivProject = styled.div`
  display: flex;
  width: 20.1%;
  height: 200px;
  margin-bottom: 2%;
  @media (max-width: 830px) {
    width: 45%;
    height: 300px;
  }
  @media (max-width: 450px) {
    width: 80%;
    height: 300px;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1vw;
`;

export const TitleProject = styled.h1`
  font-size: 1.5em;
`;

export const Desc = styled.p`
  text-align: center;
`;
