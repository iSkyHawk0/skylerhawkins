// components/HeroSection.js
"use client";
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding-top: 60px; /* to ensure the content isn’t hidden behind the fixed nav */
  z-index: 4;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin: 0.5rem 0;
`;

const HeroSubtitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0.5rem 0;
`;

const HeroTagline = styled.p`
  color: #fff;
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const HeroButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroTitle>Hello, I'm Skyler Hawkins.</HeroTitle>
      <HeroSubtitle>A passionate Software Engineer.</HeroSubtitle>
      <HeroTagline>Fullstack Developer - AI Enthusiast</HeroTagline>
      <ButtonGroup>
        <HeroButton>About Me</HeroButton>
        <HeroButton>Projects</HeroButton>
      </ButtonGroup>
    </HeroContainer>
  );
}
