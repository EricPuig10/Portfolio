import {
  CenterDiv,
  Desc,
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
            // <DivProject key={key}>
            //   <a href={project.url}>
            //     {" "}
            //     <ProjectImg src={project.img} alt={project.title} />
            //     <TitleProject></TitleProject>
            //   </a>
            // </DivProject>
            <div className="container">
              <div className="card front">
                <ProjectImg src={project.img} />
              </div>
              <div className="card back">
                <TitleProject>{project.title}</TitleProject>
                <Desc>{project.description}</Desc>
                <a href={project.url} className="btn">
                  Go to the MVP
                </a>
              </div>
            </div>
          ))}
        </DivProjectsCont>
      </CenterDiv>
    </>
  );
};
