// components/ProjectsSection.js
"use client";
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard'; // Adjust the path as necessary
import GithubWidget from '../components/GithubWidget';
import SubtleBackground from '../components/SubtleBackground';

const Section = styled.section`
  
  padding: 4rem 15rem;
  min-height: 100vh;
  // background: #010107; /* Dark background for the projects section */
  color: #fff;
  // background: transparent; /* Make the background transparent to see the grid */

  @media (max-width: 1024px) {
    padding: 4rem 5rem;
  }
  align-items: center;
  @media (max-width: 768px) {
    padding: 4rem 2rem;
  
  }
  position: relative;
  


  `;

const Title = styled.h2`
  font-size: 4.2rem;
  margin-bottom: 2rem;
  font-family: 'YourTitleFont', sans-serif;
  z-index: 2;
`;

const SubTitle = styled.h3`
z-index: 2;
font-size: 3rem;
  margin: 3rem 0 1.5rem;
  font-family: 'YourSubtitleFont', sans-serif;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Space between project cards */
`;
const TextContainer = styled.div`
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: 'Arial', sans-serif;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export default function ProjectsSection() {
  const projectData = [
    {
      title: "ReWear",
      category: "AI/ML",
      description:
        "Developed for 2024 NittanyAI Challenge. AI-powered fashion classification tool. Developed a deep learning model in TensorFlow achieving 98% accuracy in clothing recognition. Integrated React for a dynamic UI, Next.js for backend, and Firebase for data management.",
      githubUrl: "https://github.com/lr619/FashionAIs.to", // Placeholder GitHub URL
      projectImage: "rewear_logo.png", // Used as the title image for the project
    },
    {
      title: "Minimax Chess Bot",
      category: "AI/ML", // Default category when unsure
      description:
        "Developed a depth 3 Minimax chess bot with alpha beta pruning and custom board evaluation function. Consistently beats up to 800 ELO Chess.com bots. ",
      githubUrl: "https://github.com/Skyler-Hawkins/Chess_Bot",
      projectImage: "mm_chessbot.png", // Update with an actual image if available
    },
    // Skeleton for Pokemon CLI Database
    {
      title: "Pokemon CLI Database",
      category: "Websites", // Default category when unsure
      description:
        "A CLI-based application for browsing and querying Pokémon data. More details coming soon.",
      githubUrl: "https://github.com/Skyler-Hawkins/PokemonCLI",
      projectImage: "Pikachu.png", // Update with an actual image if available
    },
    {
      title: "BlockSwap",
      category: "Websites", // Default category when unsure
      description:
        "A web3 based cryptocurrency swap page. Implemented on the Ethereum blockchain using Solidity and React. Implemented and tested on the BNB testnet.",
      githubUrl: "https://github.com/Skyler-Hawkins/BlockVote",
      projectImage: "BlockSwap.png", // Update with an actual image if available
    },
    // Skeleton for FitQuest
    {
      title: "FitQuest",
      category: "Websites", // Default category when unsure
      description:
        "React-based fitness plan generation website. This was my first ever web develpoment project!  It taught me the basics of React states and how to safely use external API keys on a server-side generated website.",
      githubUrl: "https://github.com/Skyler-Hawkins/FitQuest",
      projectImage: "fitquest.png", // Update with an actual image if available
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
      <SubtleBackground />
      <Title>Projects</Title>
      <TextContainer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <GithubWidget />
      </TextContainer>
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
