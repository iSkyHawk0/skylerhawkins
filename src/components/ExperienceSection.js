// components/ExperienceSection.js
import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import GridBackground from '../components/GridBackground';

const Section = styled.section`
  padding: 4rem 15rem;
  min-height: 100vh;
  position: relative;
  background: transparent; /* Make the background transparent to see the grid */
  background-color: None;
  color: #fff;
  // font-family: 'YourBodyFont', sans-serif; /* Default body font */
  

    @media (max-width: 1024px) {
    padding: 4rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
  
`;

const Title = styled.h2`
  font-size: 4.2rem;
  margin-bottom: 2rem;
  // font-family: 'YourTitleFont', sans-serif; /* Change as needed */
`;

// This container wraps all experience items and adds a thin grey border on its left.
const ContentContainer = styled.div`
  border-left: 1px solid grey; /* Light grey color */
  padding-left: 1.5rem;
  margin-left: 0.5rem;
  position: relative;

  /* Outer circle: a thin grey ring atop the border */
  &::before {
    content: '';
    position: absolute;
    top: -0.47rem;
    left: -0.51rem;
    width: 0.8rem;
    height: 0.8rem;
    border: 1px solid grey;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  /* Inner circle: blue circle centered inside the outer ring */
  &::after {
    content: '';
    position: absolute;
    top: -0.47rem;
    left: -0.31rem;
    width: 0.48rem;
    height: 0.48rem;
    background-color: blue;
    border-radius: 50%;
    transform: translateY(-50%);
  }
`;

const ExperienceItemWrapper = styled.div`
  margin-bottom: 3rem;
`;

// A flex container for the header portion, holding the title and logo.
const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;

`;

const ExperienceTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  font-family: 'YourHeaderFont', sans-serif; /* Change as needed */
`;

// The logo image for each experience.
const Logo = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  margin-left: 1rem;
  border-radius: 50%;
  border: 1px solid #fff;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #aaa;
  font-family: 'YourBodyFont', sans-serif; /* Change as needed */
`;

const DetailsList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
`;

const DetailItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  font-family: Roboto; /* Change as needed */
`;

// ExperienceItem renders one experience entry.
function ExperienceItem({ experience }) {
  return (
    <ExperienceItemWrapper>
      <ExperienceHeader>
        <ExperienceTitle>{experience.title}</ExperienceTitle>
        {/* Reference your logo in the public directory */}
        <Logo style={{ backgroundColor: "rgba(13,29,65,255)" }} src={experience.logo} alt="Company Logo" />
      </ExperienceHeader>
      <Subtitle>{experience.locationDuration}</Subtitle>
      <DetailsList>
        {experience.details.map((detail, index) => (
          <DetailItem key={index}>{detail}</DetailItem>
        ))}
      </DetailsList>
    </ExperienceItemWrapper>
  );
}

export default function ExperienceSection() {
  const experienceData = [
    {
      title: "Peraton, Software Engineer Intern – Internal R&D",
      locationDuration: "Herndon, VA | Jun 2024 – Aug 2024",
      details: [
        "Engineered the Mock Agent application, a developer testing tool to enhance efficiency of development of interaction protocols in a multiagent system by enabling simultaneous agent conversations concurrently.",
        "Utilized Python’s Flask and JavaScript’s React for backend communication and frontend developer UI, built Docker image to enable usage for wider teams on Linux-based machines.",
        "Worked in AGILE development team, utilizing GitLab for code repository management."
      ],
      logo: "peraton_logo.png"  // Place your Peraton logo in public folder
    },
    {
      title: "Peraton-Remotec, Systems Engineer Intern – Defense Mission Systems",
      locationDuration: "Herndon, VA | Jun 2023 – Aug 2023",
      details: [
        "Engineered a Remote Access Service Portal to diagnose Unmanned Ground Vehicle malfunctions.",
        "Implemented a secure Virtual Network Computing (VNC) connection for Linux-based SSH remote access.",
        "Optimized technician workflow by reducing remote diagnostics time by ~80%."
      ],
      logo: "peraton_logo.png"  // Place your Peraton-Remotec logo in public folder
    },
    {
      title: "Pennsylvania State University, Artificial Intelligence Researcher",
      locationDuration: "State College, PA | Feb 2024 – Jul 2024",
      details: [
        "Researched methods to improve LLM interpretation of graph-theory queries using TensorFlow.",
        "Designed testing frameworks to evaluate improvements in graph-based question-answering models."
      ],
      logo: "psu_logo.png"  // Place your PSU logo in public folder
    }
  ];

  return (
    <Section id="experience">
      <Title>Experience</Title>
      <GridBackground /> {/* Optional: Add grid background for visual effect */}
      <ContentContainer>
        {experienceData.map((exp, index) => (
          <ExperienceItem  key={index} experience={exp} />
        ))}
      </ContentContainer>
    </Section>
  );
}
