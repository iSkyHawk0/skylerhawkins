// components/HeroSection.js
"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components for layout and styling
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

// IconGroup displays GitHub and LinkedIn icons
const IconGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
`;

const IconLink = styled.a`
  display: inline-block;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const IconImage = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const HeroButton = styled.a`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

// Typewriter component to animate text
function Typewriter({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      // Append the next character from the text string
      setDisplayedText(text.slice(0, currentIndex + 1));
      currentIndex++;
      // Clear interval when full text has been displayed
      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, speed);

    // Clean up the interval on component unmount or text change
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroTitle>
        {/* Using the Typewriter component to animate the hero title */}
        <Typewriter text="Hello, I'm Skyler Hawkins." speed={100} />
      </HeroTitle>
      <HeroSubtitle>A passionate Software Engineer.</HeroSubtitle>
      <HeroTagline>Fullstack Developer - AI Enthusiast</HeroTagline>
      
      {/* Social icons for GitHub and LinkedIn */}
      <IconGroup>
        <IconLink 
          href="https://github.com/Skyler-Hawkins" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <IconImage src="/github-mark-white.svg" alt="GitHub" />
        </IconLink>
        <IconLink 
          href="https://www.linkedin.com/in/skyler-hawkins-19b17b204/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <IconImage src="/LI-In-Bug.png" alt="LinkedIn" />
        </IconLink>
      </IconGroup>
      
      <ButtonGroup>
        <HeroButton href="#about">About Me</HeroButton>
        <HeroButton href="/projects">Projects</HeroButton>
      </ButtonGroup>
    </HeroContainer>
  );
}
