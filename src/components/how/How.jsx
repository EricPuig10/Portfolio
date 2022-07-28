import {
  HowIWorkDiv,
  ImageHow,
  ImageHowDiv,
  SecondDiv,
  TitleHow,
} from "./How.styled";
import howsdata from "../../data/how.json";
import { useEffect, useState } from "react";
export const How = () => {
  const [hows, setHows] = useState([howsdata]);

  useEffect(() => {
    setHows(howsdata);
  }, [hows]);

  return (
    <SecondDiv>
      {hows.map((how, key) => (
        <HowIWorkDiv key={key}>
          <ImageHowDiv>
            <ImageHow src={how.img} />
          </ImageHowDiv>
          <TitleHow>{how.title}</TitleHow>
        </HowIWorkDiv>
      ))}
    </SecondDiv>
  );
};
