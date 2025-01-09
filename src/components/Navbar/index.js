import React, { useState } from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  LinkedInButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { Close } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        {/* Logo Section */}
        <NavLogo to="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </div>
        </NavLogo>

        {/* Mobile Menu Icon */}
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Close style={{ fontSize: "2rem" }} /> : <FaBars />}
        </MobileIcon>

        {/* Desktop Menu */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        {/* Button for LinkedIn */}
        <ButtonContainer>
          <LinkedInButton href={Bio.linkedin} target="_blank">
            LinkedIn
            <FaLinkedin size={20} />
          </LinkedInButton>
          <GitHubButton href={Bio.github} target="_blank">
            GitHub
            <FaGithub size={20} />
          </GitHubButton>
        </ButtonContainer>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen}>
          <MobileLink href="#about" onClick={() => setIsOpen(false)}>
            About
          </MobileLink>
          <MobileLink href="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </MobileLink>
          <MobileLink href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </MobileLink>
          <MobileLink href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </MobileLink>
          <MobileLink href="#education" onClick={() => setIsOpen(false)}>
            Education
          </MobileLink>
          <LinkedInButton href={Bio.linkedin} target="_blank">
            LinkedIn
            <FaLinkedin size={20} />
          </LinkedInButton>
          <GitHubButton href={Bio.github} target="_blank">
            GitHub
            <FaGithub size={20} />
          </GitHubButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
