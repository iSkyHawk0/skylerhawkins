// components/EducationSection.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 15rem;
  min-height: 100vh;
  background-color: rgb(1, 1, 7); /* Dark blue color */
  color: #fff;
  font-family: 'YourBodyFont', sans-serif; /* Default body font */
`;

const Title = styled.h2`
  font-size: 4.2rem;
  margin-bottom: 2rem;
  font-family: 'YourTitleFont', sans-serif; /* Change as needed */
`;

// This container wraps all education items and adds a thin white border on its left.
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

const EducationItemWrapper = styled.div`
  margin-bottom: 3rem;
`;

// A flex container for the header portion of each education item.
const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  
`;

const University = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: 'YourHeaderFont', sans-serif; /* Change as needed */
`;

// The school logo image
const Logo = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  margin-left: 1rem;
  border-radius: 50%;
  border: 1px solid white;
  // background-color: rgba(13,29,65,255)
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

// EducationItem is a modular component that renders one education entry.
function EducationItem({ education }) {
  return (
    <EducationItemWrapper>
      <EducationHeader>
        <University>{education.university}</University>
        {/* Replace "your_file_here" with the actual path to your school logo */}
        <Logo style={{ backgroundColor: "rgba(13,29,65,255)" }} src="/psu_logo.png" alt="School Logo" />
      </EducationHeader>
      <Subtitle>{education.gpa}</Subtitle>
      <DetailsList>
        {education.details.map((detail, index) => (
          <DetailItem key={index}>{detail}</DetailItem>
        ))}
      </DetailsList>
    </EducationItemWrapper>
  );
}

export default function EducationSection() {
  // An array of education entries. You can easily add more objects here.
  const educationData = [
    {
      university: "Pennsylvania State University",
      gpa: "GPA: 3.75/4.00",
      details: [
        "State College, PA | Aug 2021 – May 2025",
        "College of Engineering | B.S. in Computer Science, Minor in Mathematics",
        "Relevant Coursework: Data Structures & Algorithms, Machine Learning, Artificial Intelligence, Web Development, Blockchain, Operating Systems, Discrete Mathematics, OOP with Java"
      ]
    }
  ];

  return (
    <Section id="education">
      <Title>Education</Title>
      <ContentContainer>
        {educationData.map((edu, index) => (
          <EducationItem key={index} education={edu} />
        ))}
      </ContentContainer>
    </Section>
  );
}
