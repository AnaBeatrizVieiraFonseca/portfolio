import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import faculdadeImge1 from './faculdadeImages/image.png';
import faculdadeImge2 from './faculdadeImages/imageCofee.png';
import faculdadeImge3 from './faculdadeImages/imageLight.png';
import faculdadeImge4 from './faculdadeImages/image.png';
import rotateAstro from './faculdadeImages/hand.gif';

import Lottie from 'lottie-react';

const Section = styled.section`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:
    linear-gradient(to bottom, rgba(17,7,31,0) 0%, #11071F 12%, #11071F 88%, rgba(17,7,31,0) 100%);
  padding: 0;
  border-radius: 32px 32px 0 0;
`;
const gradient = styled.div`
height: 280px;
widtyh: 200px;
background:
    linear-gradient(to bottom, rgba(17,7,31,0) 0%, #11071F 12%, #11071F 88%, rgba(17,7,31,0) 100%);
  
`;
const Title = styled.h2`
  font-size: 2.3rem;
  
  color: #fff;
  margin-bottom: 2rem;
  text-shadow: 0 0 12px #e040fb;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 5rem 10rem;
  
  width: 100%;
  max-width: 1500px;
  justify-content: center;
  align-items: center;
  height: auto;
  place-items: center;
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(120deg, #190634 0%, #251043 , #38126D , #261045 70%, #190634 100%);
  border-radius: 25px;
  box-shadow: 0 4px 32px 0 #2C1250;
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 0;
  max-width: 1200px;
  width: 100%;
  position: relative;
  border-top: 4px solid #693B93;
`;

const CardImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
  margin-right: 2.5rem;
  border-radius: 18px;
  box-shadow: none;
  background: none;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectTitle = styled.h1`
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  font-size: 3rem;
    font-family: 'Poppins', 'Arial', sans-serif;

  font-weight: 500;
`;

const ProjectDesc = styled.p`
  color: #D9D9D9;
  font-size: 1.08rem;
  font-family: 'Poppins', 'Arial', sans-serif;
  margin-bottom: 1.2rem;
`;

const LearnMoreButton = styled(motion.button)`
  background: #2C1250;
  color: #fff;
  width: 180px;
  border: 1px solid  #693B93;
  border-radius: 12px;
  padding: 1rem 1rem;
  font-family: 'Poppins', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px #693B93;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #693B93, #4F228D);
    color: #fff;
  }
`;

const projects = [
  {
    title: 'Flutter',
    desc: 'Atuei no desenvolvimento de aplicações em flutter voltadas para automação comercial e residencial com comunicação com banco Mysql.',
    img: faculdadeImge1,
  },
  {
    title: 'React',
    desc: '1 ano de experiência em desenvolvimento Full Stack. Atuei desde a concepção até a entrega de soluções multiplataforma, incluindo integração com bancos de dados (MySQL e NoSQL)',
    img: faculdadeImge2,
  },
  {
    title: 'Python',
    desc: '1 ano de experiência com Python, aplicando conceitos de programação orientada a objetos e manipulação de bancos de dados relacionais (MySQL, PostgreSQL) e não relacionais (MongoDB).Sempre em constante atualização quanto a novas bibliotecas erotate frameworks',
    img: faculdadeImge3,
  },
  {
    title: 'Outros',
    desc: 'Experiência no desenvolvimento de soluções, com facilidade em aprender e adaptar-se rapidamente a novas linguagens, frameworks e ferramentas. Sempre focando em boas práticas e atualização constante frente às inovações do mercado.',
    img: faculdadeImge4,
  },
];

const ProjetosFaculdade = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Section id="faculdade">
          <img src={rotateAstro} alt="Astronaut" style={{ width: '280px', height: '280px' }} />


      <Title>03.Experiências</Title>
      <ProjectsGrid>
        {projects.map((proj, idx) => (
          <ProjectCard key={proj.title}>
            <CardImage src={proj.img} alt={proj.title} />
            <CardContent>
              <ProjectTitle>{proj.title}</ProjectTitle>
              <ProjectDesc>{proj.desc}</ProjectDesc>
              <LearnMoreButton
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
              >
                Saiba mais
              </LearnMoreButton>
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default ProjetosFaculdade;
