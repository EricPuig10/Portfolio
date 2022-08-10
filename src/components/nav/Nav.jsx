import {
  BurguerButton,
  DivHb,
  DivLogo,
  DivNavButtons,
  DivNavContact,
  LogoImg,
  NavDiv,
} from "./Nav.styled";
import logo from "../../images/logoeps.png";
import { ContactBtn } from "../buttons/ContactBtn/ContactBtn.styled";
import { NavBtn } from "../buttons/NavButton/NavButton.styled";
import { scroller } from "react-scroll";
import { useState } from "react";

export const Nav = () => {
  const [hbIsOpened, setHbIsOpened] = useState(false);

  const toggleContent = () => {
    setHbIsOpened(!hbIsOpened);
  };

  // const erase = () => {
  //   toggleContent(false);
  // };

  const scrollType = {
    duration: 500,
    delay: 50,
    smooth: true, // linear “easeInQuint” “easeOutCubic”
    offset: -10,
  };

  return (
    <>
      <NavDiv>
        <DivLogo>
          <LogoImg src={logo} alt="epsLogo" />
        </DivLogo>
        <BurguerButton onClick={toggleContent}>
          <i className="fa-solid fa-ellipsis"></i>
        </BurguerButton>
        {!hbIsOpened ? null : (
          <>
            <DivHb>
              <NavBtn onClick={() => scroller.scrollTo("about", scrollType)}>
                ABOUT ME
              </NavBtn>
              <NavBtn
                onClick={() => scroller.scrollTo("technologies", scrollType)}
              >
                TECHNOLOGIES
              </NavBtn>
              <NavBtn onClick={() => scroller.scrollTo("projects", scrollType)}>
                PROJECTS
              </NavBtn>
            </DivHb>
          </>
        )}

        <DivNavButtons>
          <NavBtn onClick={() => scroller.scrollTo("about", scrollType)}>
            ABOUT ME
          </NavBtn>
          <NavBtn onClick={() => scroller.scrollTo("technologies", scrollType)}>
            TECHNOLOGIES
          </NavBtn>
          <NavBtn onClick={() => scroller.scrollTo("projects", scrollType)}>
            PROJECTS
          </NavBtn>
        </DivNavButtons>
        <DivNavContact>
          <ContactBtn>CONTACT</ContactBtn>
        </DivNavContact>
      </NavDiv>
    </>
  );
};