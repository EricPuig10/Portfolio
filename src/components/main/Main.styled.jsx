import styled from "styled-components";

export const MainDiv = styled.div`
  /* background-color: white; */
  padding-top: 8%;
  width: 100%;
  height: 70vh;
  display: flex;
  @media (max-width: 830px) {
    padding-top: 20%;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  @media (max-width: 450px) {
    padding-top: 35%;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
`;

export const LeftDiv = styled.div`
  padding-left: 10%;
  width: 40%;
  display: flex;
  flex-direction: column;
  @media (max-width: 830px) {
    width: 100%;
    padding-left: 0%;
  }
  @media (max-width: 450px) {
    width: 100%;
    padding-left: 0%;
  }
`;

export const DivTitle = styled.div`
  width: 90%;
  padding-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 830px) {
    padding: 0%;
    width: 80%;
    display: flex;
    align-self: center;
  }
  @media (max-width: 450px) {
    padding-top: 0%;
    padding-left: 4%;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 2em;
  text-align: center;
  @media (max-width: 830px) {
    font-size: 2em;
  }
  @media (max-width: 450px) {
    font-size: 1.5em;
  }
`;

export const RightDiv = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 830px) {
    width: 100%;
    margin-top: 0%;
  }
  @media (max-width: 450px) {
    width: 100%;
    margin-top: 10%;
  }
`;

export const DivImg = styled.div`
  width: 50%;
  height: 80%;
  background-image: url("https://www.wallpapertip.com/wmimgs/4-44576_anti-matter.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 1vw;
  position: relative;
  @media (max-width: 830px) {
    margin-top: 20%;
    width: 80%;
    height: 100%;
    border-radius: 10vw;

  }
  @media (max-width: 450px) {
    margin-top: 20%;
    width: 80%;
    height: 100%;
    border-radius: 10vw;
  }
`;
export const MainImg = styled.img`
  width: 278px;
  height: 320px;
  object-fit: cover;
`;

export const BottomGlassDiv = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 190px;
  height: 70px;
  top: 85%;
  left: 60%;
  display: flex;
  @media (max-width: 830px) {
    width: 330px;
    height: 100px;
    top: -6%;
    left: 55%;
  }
  @media (max-width: 450px) {
    width: 220px;
    height: 80px;
    top: 85%;
    left: 35%;
  }
`;

export const TopGlassDiv = styled.div`
position: absolute;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 190px;
  height: 70px;
  top: -10%;
  left: -20%;
  display: flex;
  @media (max-width: 830px) {
    width: 240px;
    height: 80px;
    top: -2%;
    left: -2%;
  }
  @media (max-width: 450px) {
    width: 150px;
    height: 60px;
    top: -10%;
    left: -5%;
  }
`;

export const ImgUserDiv = styled.a`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ImgUser = styled.img`
  width: 75%;
  height: 80%;
  object-fit: contain;
  border-radius: 50%;
  margin-left: 5%;
  @media (max-width: 830px) {
    width: 65%;
    height: 85%;
  }
  @media (max-width: 450px) {
    width: 80%;
    height: 90%;
  }
`;

export const ImgGitDiv = styled.a`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ImgGit = styled.img`
  height: 80%;
  object-fit: contain;
  border-radius: 50%;
  margin-left: 5%;
  @media (max-width: 830px) {
    width: 65%;
    height: 85%;
  }
  @media (max-width: 450px) {
    width: 80%;
    height: 90%;
  }
`;

export const TextUserDiv = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const TextUser = styled.p`
  color: #ffffffdb;
  font-size: 1em;
  @media (max-width: 830px) {
    font-size: 1.6em;
  }
  @media (max-width: 450px) {
    font-size: 1.2em;
  }
`;

export const TextDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: #ffffffdb;
  text-align: center;
  @media (max-width: 830px) {
    font-size: 1.6em;
  }
  @media (max-width: 450px) {
    font-size: 1.2em;
  }
`;
