import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;
export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const LinkedInButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  background: #0077b5; /* LinkedIn's primary blue color */
  color: white;
  border: none;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  gap: 10px;
  box-shadow: 0 4px 10px rgba(0, 119, 181, 0.2);

  &:hover {
    background: #005983; /* Slightly darker LinkedIn blue for hover effect */
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 119, 181, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(0, 119, 181, 0.2);
  }

  svg {
    fill: white; /* Ensure LinkedIn icon stays white */
    transition: fill 0.4s ease-in-out;
  }

  &:hover svg {
    fill: #e5e5e5; /* Slightly lighter hover effect for the icon */
  }
`;

export const GitHubButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  background: #24292e; /* GitHub's signature dark background */
  color: #ffffff;
  border: none;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  gap: 10px;
  margin-left:5px;

  &:hover {
    background: #333d47; /* Slightly lighter shade for hover */
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  svg {
    fill: #ffffff; /* Ensure GitHub icon stays white */
    transition: fill 0.4s ease-in-out;
  }

  &:hover svg {
    fill: #c9d1d9; /* GitHub's light gray hover color */
  }
`;



export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.card};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding: 16px;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-200%)"};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.6s ease;
  z-index: 999;
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer;
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
