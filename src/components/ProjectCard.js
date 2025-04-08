// components/ProjectCard.js
"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

// Determine if we are in production.
const isProd = process.env.NODE_ENV === 'production';

// Helper function to prepend '/skylerhawkins' in production if not already present.
const fixImagePath = (path) =>
  isProd && !path.startsWith('/skylerhawkins')
    ? `/skylerhawkins${path.startsWith('/') ? '' : '/'}${path}`
    : path;

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
  border: 2px solid white;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    border: none;
    padding: 2px;
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
  font-size: 1.2rem;
  margin-top: 0.5rem;
  margin-right: 2rem;
`;

// GithubLogoWrapper now includes a subtle scale and brightness effect on hover.
const GithubLogoWrapper = styled.div`
  position: relative;
  width: 4vw;
  height: 4vw;
  margin: 0 1rem;
  padding-bottom: 10px;
  transition: transform 0.3s ease, filter 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
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
  // Optional: Delay rendering until client mount to avoid hydration issues.
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <CardWrapper>
      <CardContent>
        {/* Left text area */}
        <InfoArea>
          <InfoHeader>
            <Title>{title}</Title>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubLogoWrapper>
                <Image
                  src={fixImagePath("github-mark-white.svg")}
                  alt="GitHub Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </GithubLogoWrapper>
            </a>
          </InfoHeader>
          <Description>{description}</Description>
        </InfoArea>
        {/* Right image area */}
        <ImageArea>
          <img src={fixImagePath(projectImage)} alt={`${title} title image`} />
        </ImageArea>
      </CardContent>
    </CardWrapper>
  );
}
