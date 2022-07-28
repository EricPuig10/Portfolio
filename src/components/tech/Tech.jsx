import { useEffect, useState } from "react";
import techsdata from "../../data/tech.json";
import {
  AllTechsDiv,
  CenterDiv,
  TechDiv,
  TechImg,
  TitleTech,
} from "./Tech.styled";

export const Tech = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    setTechs(techsdata);
  }, []);

  return (
    <>
      <CenterDiv>
        <TitleTech>Technologies Used</TitleTech>
        <AllTechsDiv>
          {techs.map((tech, key) => (
            <TechDiv key={key}>
              <TechImg src={tech.img} alt={tech.name} />
            </TechDiv>
          ))}
        </AllTechsDiv>
      </CenterDiv>
    </>
  );
};
