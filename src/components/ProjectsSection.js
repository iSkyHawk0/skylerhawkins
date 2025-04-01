// components/ProjectsSection.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 15rem;
  min-height: 100vh;
  color: #fff;
  font-family: 'YourBodyFont', sans-serif; /* Default body font */
`;

const Title = styled.h2`
  font-size: 4.2rem;
  margin-bottom: 2rem;
  font-family: 'YourTitleFont', sans-serif; /* Change as needed */
`;

// This container wraps all project items and adds a thin grey border on its left.
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

const ProjectItemWrapper = styled.div`
  margin-bottom: 3rem;
`;

// Flex container for the header portion: project title and logo.
const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: 'YourHeaderFont', sans-serif; /* Change as needed */
`;

// Logo image for the project.
const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  margin-left: 1rem;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #aaa;
  font-family: 'YourBodyFont', sans-serif; /* Change as needed */
`;

const DetailsList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
`;

const DetailItem = styled.li`
  font-size: 1.0rem;
  margin-bottom: 0.3rem;
  font-family: Roboto; /* Change as needed */
`;

// ProjectItem renders one project entry.
function ProjectItem({ project }) {
  return (
    <ProjectItemWrapper>
      <ProjectHeader>
        <ProjectTitle>{project.title}</ProjectTitle>
        {/* Replace "/rewear-logo.png" with your actual project logo file in the public directory */}
        {/* <Logo src={project.logo} alt="Project Logo" /> */}
      </ProjectHeader>
      <Subtitle>{project.locationDuration}</Subtitle>
      <DetailsList>
        {project.details.map((detail, index) => (
          <DetailItem key={index}>{detail}</DetailItem>
        ))}
      </DetailsList>
    </ProjectItemWrapper>
  );
}

export default function ProjectsSection() {
  const projectData = [
    {
      title: "ReWear, Software Development Lead: NittanyAI Challenge",
      locationDuration: "State College, PA | Dec 2023 – Feb 2024",
      details: [
        "Led the development of an AI-powered fashion classification tool.",
        "Developed a deep learning model in TensorFlow achieving 98% accuracy in clothing recognition.",
        "Integrated React for a dynamic UI, Next.js for backend, and Firebase for data management."
      ],
      logo: "/rewear-logo.png"
    }
    // Add more projects as needed.
  ];

  return (
    <Section id="projects">
      <Title>Projects</Title>
      <ContentContainer>
        {projectData.map((proj, index) => (
          <ProjectItem key={index} project={proj} />
        ))}
      </ContentContainer>
    </Section>
  );
}
