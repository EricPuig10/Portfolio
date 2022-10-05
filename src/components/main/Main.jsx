import {
  BottomGlassDiv,
  DivImg,
  DivTitle,
  ImgGit,
  ImgGitDiv,
  ImgUser,
  ImgUserDiv,
  LeftDiv,
  MainDiv,
  MainImg,
  RightDiv,
  Text,
  TextDiv,
  TextUser,
  TextUserDiv,
  Title,
  TopGlassDiv,
} from "./Main.styled";
import { Tech } from "../tech/Tech";
import ericdata from "../../data/eric.json";
import { useEffect, useState } from "react";
import { animateScroll as scroll, Element } from "react-scroll";
import { ButtonToTop } from "../buttons/ButtonToTop/ButtonToTop.styled";
import { Projects } from "../projects/Projects";

export const Main = () => {
  const [eric, setEric] = useState([ericdata]);

  useEffect(() => {
    scroll.scrollToTop();
    setEric(ericdata);
  }, []);

  return (
    <>
      <Element name="about">
        <MainDiv>
          <LeftDiv>
            <DivTitle>
              <Title>
                Hello World I'm not "John Doe" but you are going to see my
                name more frequently than his. <br></br>
                <br></br> Dedicated, hard-worker and proactive. Develope and
                test to increase the overall efficiency of operations using
                Clean Code and Solid principles.
              </Title>
            </DivTitle>
          </LeftDiv>
          <RightDiv>
            <DivImg>
              <MainImg src="https://res.cloudinary.com/ericpuig10/image/upload/v1661433487/logoeps_z4xkku.png" />
              <TopGlassDiv>
                <ImgGitDiv href="https://github.com/EricPuig10">
                  <ImgGit src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg"></ImgGit>
                </ImgGitDiv>
                <TextDiv>
                  <Text>{eric[0].work}</Text>
                </TextDiv>
              </TopGlassDiv>
              <BottomGlassDiv>
                <ImgUserDiv href="https://www.linkedin.com/in/ericpuigvendrello">
                  <ImgUser src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-original-wordmark.svg"></ImgUser>
                </ImgUserDiv>
                <TextUserDiv>
                  <TextUser>
                    {eric[0].name} {eric[0].surname}
                  </TextUser>
                </TextUserDiv>
              </BottomGlassDiv>
            </DivImg>
          </RightDiv>
        </MainDiv>
        {/* <How /> */}
      </Element>
      <Element name="technologies">
        <Tech id="technologies" />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <ButtonToTop onClick={scroll.scrollToTop}>
        <i className="fa-solid fa-arrow-up fa-2xl"></i>
      </ButtonToTop>
    </>
  );
};
