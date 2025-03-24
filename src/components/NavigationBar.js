// components/NavigationBar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  background-color: #111;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999; /* Increased z-index ensures nav is always on top */
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 1.5rem;
  cursor: pointer;
`;

export default function NavigationBar() {
  return (
    <Nav>
      <div style={{ fontWeight: 'bold', color: '#fff' }}>Skyler Hawkins</div>
      <div>
        <NavItem href="#experience">Experience</NavItem>
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#about">About Me</NavItem>
        <NavItem href="#contact">Contact Me</NavItem>
      </div>
    </Nav>
  );
}
