// components/SkillsSection.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background-color: black;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  font-size: 1.2rem;
`;

export default function SkillsSection() {
  return (
    <Section id="skills">
      <Title>Skills</Title>
      <Content>
        <p>Your skills details go here...</p>
      </Content>
    </Section>
  );
}
