// pages/index.js
"use client";
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import AnimatedBackground from '../components/AnimatedBackground';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutMeSection from '../components/AboutMeSection';
import ContactMeSection from '../components/ContactMeSection';
import styled from 'styled-components';
import EducationSection from '@/components/EducationSection';

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  
  overflow-x: hidden;
  background-color: rgba(1, 1, 7, 0.5); /* Dark blue color */
  background: transparent;
  // font-family: Arial, sans-serif;
`;

const LandingWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 4; /* This ensures the hero text appears above the animated background layers */
`;
const NavWrapper = styled.div`
  position: relative;
  z-index: 5;
`;
export default function Home() {
  return (
    <PageWrapper>
      <NavWrapper>
        <NavigationBar />
      </NavWrapper>
      <LandingWrapper >
        <AnimatedBackground />
        <ContentWrapper id = "home">
          <HeroSection />
        </ContentWrapper>
      </LandingWrapper>
      {/* <EducationSection />
      <ExperienceSection />
      <SkillsSection /> */}
      {/* <ProjectsSection /> */}
      <AboutMeSection />
      {/* <ContactMeSection /> */}
    </PageWrapper>
  );
}
