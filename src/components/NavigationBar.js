// components/NavigationBar.js
import React from 'react';
import Link from 'next/link';
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
  z-index: 999;
  font-size: 1.2rem;
`;

const NavItems = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none; /* removes underline */
  cursor: pointer;
`;

export default function NavigationBar() {
  return (
    <Nav>
      <NavItem>
      <Link href="/" passHref legacyBehavior>
        <div style={{ fontWeight: 'bold', color: '#fff' }}>Skyler Hawkins</div>
      </Link>
      </NavItem>      
      <NavItems>
        <Link href="/" passHref legacyBehavior>
          <NavItem>Home</NavItem>
        </Link>
        <Link href="/experience" passHref legacyBehavior>
          <NavItem>Experience</NavItem>
        </Link>

        <Link href="/projects" passHref legacyBehavior>
          <NavItem>Projects</NavItem>
        </Link>
        {/* Add /contact if desired */}
      </NavItems>
    </Nav>
  );
}
