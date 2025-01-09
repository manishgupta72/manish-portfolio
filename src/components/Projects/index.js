import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to crms. Here
          are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Website & CRM" ? (
            <ToggleButton
              active
              value="Website & CRM"
              onClick={() => setToggle("Website & CRM")}
            >
              Website & CRM
            </ToggleButton>
          ) : (
            <ToggleButton value="Website & CRM" onClick={() => setToggle("Website & CRM")}>
             Website & CRM
            </ToggleButton>
          )}
          <Divider />
          {toggle === "crm" ? (
            <ToggleButton active value="crm" onClick={() => setToggle("crm")}>
              CRM
            </ToggleButton>
          ) : (
            <ToggleButton value="crm" onClick={() => setToggle("crm")}>
              CRM
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter(
              (project) =>
                toggle === "all" ||
                project.category.toLowerCase() === toggle.toLowerCase()
            )
            .map((project,index) => (
              <ProjectCard key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
