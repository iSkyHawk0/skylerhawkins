// components/ProjectsSection.js
"use client";
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard'; // Adjust the path as necessary

const Section = styled.section`
  padding: 4rem 15rem;
  min-height: 100vh;
  background: #010107; /* Dark background for the projects section */
  color: #fff;
`;

const Title = styled.h2`
  font-size: 4.2rem;
  margin-bottom: 2rem;
  font-family: 'YourTitleFont', sans-serif;
`;

const SubTitle = styled.h3`
  font-size: 3rem;
  margin: 3rem 0 1.5rem;
  font-family: 'YourSubtitleFont', sans-serif;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Space between project cards */
`;

export default function ProjectsSection() {
  const projectData = [
    {
      title: "ReWear",
      category: "AI/ML",
      description:
        "Developed for 2024 NittanyAI Challenge. AI-powered fashion classification tool. Developed a deep learning model in TensorFlow achieving 98% accuracy in clothing recognition. Integrated React for a dynamic UI, Next.js for backend, and Firebase for data management.",
      githubUrl: "https://github.com/lr619/FashionAIs.to", // Placeholder GitHub URL
      projectImage: "/rewear-logo.png", // Used as the title image for the project
    },
    {
      title: "Minimax Chess Bot",
      category: "AI/ML", // Default category when unsure
      description:
        "A project implementing a chess bot using the minimax algorithm. More details coming soon.",
      githubUrl: "https://github.com/Skyler-Hawkins/Chess_Bot",
      projectImage: "/chess-bot-placeholder.png", // Update with an actual image if available
    },
    // Skeleton for Pokemon CLI Database
    {
      title: "Pokemon CLI Database",
      category: "Websites", // Default category when unsure
      description:
        "A CLI-based application for browsing and querying Pokémon data. More details coming soon.",
      githubUrl: "https://github.com/Skyler-Hawkins/PokemonCLI",
      projectImage: "/Pikachu.png", // Update with an actual image if available
    },
    {
      title: "BlockSwap",
      category: "Websites", // Default category when unsure
      description:
        "A web3 based cryptocurrency swap page. Implemented on the Ethereum blockchain using Solidity and React. Implemented and tested on the BNB testnet.",
      githubUrl: "https://github.com/Skyler-Hawkins/BlockVote",
      projectImage: "/BlockSwap.png", // Update with an actual image if available
    },
    // Skeleton for FitQuest
    {
      title: "FitQuest",
      category: "Websites", // Default category when unsure
      description:
        "My first ever website developed using React.A fitness plan generating platform. Taught me the basics of React states and how to safely use external API keys on a server-side generated website.",
      githubUrl: "https://github.com/Skyler-Hawkins/FitQuest",
      projectImage: "/fitquest.png", // Update with an actual image if available
    },
    // Add more projects as needed.
  ];

  // Filter projects by category
  const websitesProjects = projectData.filter(
    (proj) => proj.category === "Websites"
  );
  const aiProjects = projectData.filter((proj) => proj.category === "AI/ML");

  return (
    <Section id="projects">
      <Title>Projects</Title>
      {aiProjects.length > 0 && (
        <>
          <SubTitle>AI/ML</SubTitle>
          <ContentContainer>
            {aiProjects.map((proj, index) => (
              <ProjectCard
                key={index}
                title={proj.title}
                description={proj.description}
                githubUrl={proj.githubUrl}
                projectImage={proj.projectImage}
              />
            ))}
          </ContentContainer>
        </>
      )}

      {websitesProjects.length > 0 && (
        <>
          <SubTitle>Websites</SubTitle>
          <ContentContainer>
            {websitesProjects.map((proj, index) => (
              <ProjectCard
                key={index}
                title={proj.title}
                description={proj.description}
                githubUrl={proj.githubUrl}
                projectImage={proj.projectImage}
              />
            ))}
          </ContentContainer>
        </>
      )}


    </Section>
  );
}
