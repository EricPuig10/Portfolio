import {
  CenterDiv,
  DivProject,
  DivProjectsCont,
  ProjectImg,
  TitleProject,
  TitleProjects,
} from "./Projects.styled";
import projectsdata from "../../data/projects.json";
import { useEffect, useState } from "react";

export const Projects = () => {
  const [projects, setProjects] = useState([projectsdata]);

  useEffect(() => {
    setProjects(projectsdata);
  }, []);
  return (
    <>
      <CenterDiv>
        <TitleProjects>Projects</TitleProjects>
        <DivProjectsCont>
          {projects.map((project, key) => (
            <DivProject key={key}>
              <ProjectImg src={project.img} alt={project.title} />
              <TitleProject></TitleProject>
            </DivProject>
          ))}
        </DivProjectsCont>
      </CenterDiv>
    </>
  );
};
