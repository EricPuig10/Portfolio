import {
  BurguerButton,
  DivHb,
  DivLogo,
  DivNavButtons,
  DivNavContact,
  LogoImg,
  NavDiv,
} from "./Nav.styled";
import { ContactBtn } from "../buttons/ContactBtn/ContactBtn.styled";
import { NavBtn } from "../buttons/NavButton/NavButton.styled";
import { scroller } from "react-scroll";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <LogoImg
              src="https://media-exp1.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_200_200/0/1587477510501?e=2147483647&v=beta&t=6sACypo0FI4lkEs7yB0gr5M6maTaNzYrRb-8f1m588o"
              alt="epsLogo"
            />
          </Link>
        </DivLogo>
        <BurguerButton onClick={toggleContent}>
          <i className="fa-solid fa-ellipsis"></i>
        </BurguerButton>
        {!hbIsOpened ? null : (
          <>
            <DivHb>
              <Link to="/">
                <NavBtn onClick={() => scroller.scrollTo("about", scrollType)}>
                  ABOUT ME
                </NavBtn>
              </Link>
              <Link to="/">
                <NavBtn
                  onClick={() => scroller.scrollTo("technologies", scrollType)}
                >
                  TECHNOLOGIES
                </NavBtn>
              </Link>
              <Link to="/">
                <NavBtn
                  onClick={() => scroller.scrollTo("projects", scrollType)}
                >
                  PROJECTS
                </NavBtn>
              </Link>
            </DivHb>
          </>
        )}

        <DivNavButtons>
          <Link to="/">
            <NavBtn onMouseOver={() => scroller.scrollTo("about", scrollType)}>
              ABOUT ME
            </NavBtn>
          </Link>
          <Link to="/">
            <NavBtn
              onMouseOver={() => scroller.scrollTo("technologies", scrollType)}
            >
              TECHNOLOGIES
            </NavBtn>
          </Link>
          <Link to="/">
            <NavBtn onMouseOver={() => scroller.scrollTo("projects", scrollType)}>
              PROJECTS
            </NavBtn>
          </Link>
        </DivNavButtons>
        <DivNavContact>
          <Link to="/contact">
            <ContactBtn>CONTACT</ContactBtn>
          </Link>
        </DivNavContact>
      </NavDiv>
    </>
  );
};
