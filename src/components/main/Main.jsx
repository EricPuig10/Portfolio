import {
  BottomGlassDiv,
  DivImg,
  DivTitle,
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
import logo from "../../images/logoeps.png";
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
                {eric[0].slogan} <br></br>
                <br></br> Dedicated, hard-worker and proactive. Develope and
                test to increase the overall efficiency of operations using
                Clean Code and Solid principles.
              </Title>
            </DivTitle>
          </LeftDiv>
          <RightDiv>
            <DivImg>
              <MainImg src={logo} />
              <TopGlassDiv>
                <TextDiv>
                  <Text>{eric[0].work}</Text>
                </TextDiv>
              </TopGlassDiv>
              <BottomGlassDiv>
                <ImgUserDiv href="https://www.linkedin.com/in/ericpuigvendrello">
                  <ImgUser src="https://media-exp1.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_200_200/0/1587477510501?e=2147483647&v=beta&t=6sACypo0FI4lkEs7yB0gr5M6maTaNzYrRb-8f1m588o"></ImgUser>
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
