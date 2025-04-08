// components/GithubWidget.js
"use client";
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Check if we are in production.
const isProd = process.env.NODE_ENV === 'production';
// Helper function: prepend '/skylerhawkins' in production if not already present.
const fixImagePath = (path) =>
  isProd && !path.startsWith('/skylerhawkins') ? `/skylerhawkins${path}` : path;

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

// WidgetContainer is now a styled anchor element.
const WidgetContainer = styled.a`
  position: relative;
  width: 50%;
  border-radius: 8px;
  border: 2px solid white;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    padding: 2px; /* Creates the space for the border */
    transform: scale(1.02);
    border: none;
  }
  
  /* Pseudo-element for the rainbow border */
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
  background: #1e1e2f; /* Dark background */
  border-radius: 6px;   /* Slightly smaller radius than the wrapper */
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
        <GithubLogo 
          src={fixImagePath("/github-mark-white.svg")} 
          alt="GitHub Logo" 
        />
      </WidgetContent>
    </WidgetContainer>
  );
}
