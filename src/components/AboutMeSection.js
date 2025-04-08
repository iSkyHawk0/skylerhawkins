// components/AboutMeSection.js
"use client";
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  padding: 4rem 15rem;
  min-height: 100vh;
  background-color: black;
  color: #fff;
  font-family: 'YourBodyFont', sans-serif;

  @media (max-width: 1024px) {
    padding: 4rem 10rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 5rem;
  }

`;

const Title = styled.h2`
  font-size: 4.2rem;
  margin-bottom: 3rem;
  font-family: 'YourTitleFont', sans-serif;
  text-align: left;
`;

const Row = styled.div`
  display: flex;
  align-items: center; /* Centers items vertically */
  margin-bottom: 4rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// const Image = styled.img`
//   width: 20rem;
//   height: auto;
//   border-radius: 8px;
//   object-fit: cover;
//   object-position: center; /* Ensure the image's center is used */
//   border: 2px solid #fff; /* Optional: adds a white border around the image */
// `;

const TextContainer = styled.div`
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

export default function AboutMeSection() {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <Row>
        <Image
          src="IMG_5967.jpeg"
          alt="Professional Profile"
          width={320}
          height={240}
          style={{
            borderRadius: '8px',
            objectFit: 'cover',
            objectPosition: 'center',
            border: '2px solid #fff'
          }}
        />
        <TextContainer>
          <Paragraph>
            Hi, I'm Skyler. I am a fourth-year student at Penn State, studying Computer Science with a minor in Mathematics. 
            Ever since I was young, I've had a deep love for math and problem-solving. With a natural knack for computers—thanks 
            in part to my father's influence as a software engineer—I gravitated toward programming. I chose to study computer science, a field I soon discovered is as 
            challenging as it is rewarding. After four years of undergraduate studies, I've come to realize that I still have much to learn. I once believed that earning a 
            degree would equip me to solve any programming problem, but I’ve learned that being a Software Engineer is a lifelong journey of discovery. 
            This website marks a new chapter in my development—a space where I hold myself accountable for exploring new topics in machine learning and AI.
          </Paragraph>
        </TextContainer>
      </Row>
      <Row>
        <Image
          src="IMG_5966.jpeg"
          alt="Personal Profile"
          width={320}
          height={240}
          style={{
            borderRadius: '8px',
            objectFit: 'cover',
            objectPosition: 'center',
            border: '2px solid #fff'
          }}
        />
        <TextContainer>
          <Paragraph>
            Beyond coding, I lead an active lifestyle. I competed in Taekwondo from ages 10 to 18, earning the PA State Champion title in 2016, 2017, 2018, and 2020. 
            Today, I’m an avid gym-goer and take pride in my skills at spike-ball. I believe that maintaining a strong physical body keeps my mind sharp 
            and gives me the confidence to excel both personally and professionally.
          </Paragraph>
        </TextContainer>
      </Row>
    </Section>
  );
}
