import styled from "styled-components";

export const TitleProjects = styled.h2`
  margin-top: 2%;
  color: white;
  margin-bottom: 4%;
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
  margin-top: 8%;
`;

export const DivProjectsCont = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const DivProject = styled.div`
  display: flex;
  width: 22%;
  height: 200px;
  margin-bottom: 2%;
  @media (max-width: 450px) {
    width: 80%;
    height: 300px;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitleProject = styled.h3``;
