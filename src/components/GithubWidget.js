// components/GithubWidget.js
"use client";
import React from 'react';
import styled, { keyframes } from 'styled-components';
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
const WidgetContainer = styled.div`
  position: relative;
  width:50%;
  border-radius: 8px;
  
  border: 2px solid white;

  transition: transform 0.3s ease;
  &:hover {
  padding: 2px; /* This creates the space for the border */
  transform: scale(1.02);
    border: none;
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
const WidgetContent = styled.div`
  position: relative;
  background: #1e1e2f; /* Dark background for the card */
  border-radius: 6px; /* Slightly smaller radius than the wrapper */
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #fff;
  z-index: 1;
`;
const WidgetText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin: 0;
  margin-right: 1rem;
  font-family: sans-serif;
`;

const GithubLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

export default function GithubWidget({ 
  githubUrl = "https://github.com/Skyler-Hawkins", 
  text = "To see all my projects, check out my GitHub!" 
}) {
  return (
    <WidgetContainer 
      href={githubUrl} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <WidgetContent>
       
          <WidgetText>{text}</WidgetText>
          <a href={"https://github.com/Skyler-Hawkins"} target="_blank" rel="noopener noreferrer">
          <GithubLogo src="github-mark-white.svg" alt="GitHub Logo" />
          </a>
      </WidgetContent>
    </WidgetContainer>
  );
}
