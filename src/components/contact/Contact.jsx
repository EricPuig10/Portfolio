import React from "react";
import {
  DivContact,
  IconContact,
  ImageContact,
  LeftDiv
} from "./Contact.styled";

export const Contact = () => {
  return (
    <DivContact>
      <LeftDiv>
        <IconContact>
          <a href="mailto:puigvendrelloetona@gmail.com?Subject=Quiero%conocerte!">
            {" "}
            <ImageContact src="https://icons-for-free.com/download-icon-book+circle+contact+contacts+email+gmail+icon-1320073243450677731_0.svg" />
          </a>
          <a href="https://www.linkedin.com/in/ericpuigvendrello/">
            <ImageContact src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-plain.svg" />
          </a>
          <a href="https://github.com/EricPuig10">
            {" "}
            <ImageContact src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg" />
          </a>
        </IconContact>
      </LeftDiv>
    </DivContact>
  );
};
