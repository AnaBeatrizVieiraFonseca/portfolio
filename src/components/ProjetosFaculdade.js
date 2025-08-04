import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(120deg, rgba(58,28,113,0.7) 0%, rgba(224,64,251,0.2) 100%);
  padding: 80px 0 40px 0;
  border-radius: 32px 32px 0 0;
  margin-top: 40px;
`;

const Title = styled.h2`
  font-size: 2.3rem;
  color: #fff;
  margin-bottom: 2rem;
  text-shadow: 0 0 12px #e040fb;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
  width: 90%;
  max-width: 1200px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(24, 0, 48, 0.85);
  border: 2px solid #e040fb;
  border-radius: 22px;
  box-shadow: 0 4px 32px 0 #3a1c71;
  padding: 2.2rem 1.7rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px) scale(1.04);
    box-shadow: 0 8px 40px 0 #e040fb;
    background: rgba(224,64,251,0.12);
  }
`;

const ProjectTitle = styled.h3`
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
`;

const ProjectDesc = styled.p`
  color: #e0e7ff;
  font-size: 1.08rem;
`;

const projects = [
  {
    title: 'Projeto Faculdade 1',
    desc: 'Projeto acadêmico complexo com design livre e recursos avançados.',
  },
  {
    title: 'Projeto Faculdade 2',
    desc: 'Outro projeto de destaque, com foco em criatividade e tecnologia.',
  },
];

const ProjetosFaculdade = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Section id="faculdade">
      <Title>Projetos Faculdade</Title>
      <ProjectsGrid>
        {projects.map((proj, idx) => (
          <ProjectCard
            key={proj.title}
            data-aos="zoom-in-up"
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 180 }}
          >
            <ProjectTitle>{proj.title}</ProjectTitle>
            <ProjectDesc>{proj.desc}</ProjectDesc>
            <motion.button
              whileHover={{ scale: 1.1 }}
              style={{
                marginTop: '1rem',
                background: 'linear-gradient(90deg, #3a1c71, #e040fb, #fff)',
                color: '#3a1c71',
                border: 'none',
                borderRadius: '8px',
                padding: '0.5rem 1.2rem',
                cursor: 'pointer',
                fontWeight: 600,
                boxShadow: '0 2px 8px #e040fb',
              }}
            >
              Clique para Abrir
            </motion.button>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default ProjetosFaculdade;
