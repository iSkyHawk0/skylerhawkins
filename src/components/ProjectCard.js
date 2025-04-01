// components/ProjectCard.js
"use client";
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the animated rainbow gradient.
const rainbowAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Outer wrapper that shows the rainbow border on hover.
const CardWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 2px; /* This creates the space for the border */
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
  /* The pseudo-element used for the rainbow border */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background: linear-gradient(
      45deg,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet
    );
    background-size: 400% 400%;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  &:hover::before {
    opacity: 1;
    animation: ${rainbowAnimation} 7s linear infinite;
  }
`;

// Inner container that holds the card's content.
const CardContent = styled.div`
  position: relative;
  background: #1e1e2f; /* Dark background for the card */
  border-radius: 6px; /* Slightly smaller radius than the wrapper */
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #fff;
  z-index: 1;
`;

// Left section holding text.
const InfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// Header containing title and GitHub logo.
const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// The project title.
const Title = styled.h3`
  font-size: 2rem;
  margin: 0;
`;

// Description paragraph.
const Description = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-right: 2rem;
`;

// GitHub logo, which links to the GitHub repository.
const GithubLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
  margin: 0 1rem;
  padding-bottom: 10px;
`;

// Right section for the project title image.
const ImageArea = styled.div`
  width: 150px; /* Adjust as needed */
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export default function ProjectCard({
  title,
  description,
  githubUrl,
  projectImage,
}) {
  return (
    <CardWrapper>
      <CardContent>
        {/* Left text area */}
        <InfoArea>
          <InfoHeader>
            <Title>{title}</Title>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubLogo src="/github-mark-white.svg" alt="GitHub Logo" />
            </a>
          </InfoHeader>
          <Description>{description}</Description>
        </InfoArea>
        {/* Right image area */}
        <ImageArea>
          <img src={projectImage} alt={`${title} title image`} />
        </ImageArea>
      </CardContent>
    </CardWrapper>
  );
}
