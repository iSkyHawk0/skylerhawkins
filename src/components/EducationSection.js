// components/ExperienceSection.js
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

export default function EducationSection() {
  return (
    <Section id="education">
      <Title>Education</Title>
      <Content>
        <p>Your education details go here...</p>
      </Content>
    </Section>
  );
}
