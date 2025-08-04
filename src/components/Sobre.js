import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import icon from './estrangeiro.png'; 
import alien from './alien.png';
import rotateAstro from './RotateStro.gif'; 

// SVG Astronauta
const AstronautSVG = () => (
  <svg width="140" height="140" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="85" cy="85" rx="85" ry="85" fill="#23243a"/>
    <ellipse cx="85" cy="90" rx="48" ry="48" fill="#3a1c71"/>
    <ellipse cx="85" cy="90" rx="38" ry="38" fill="#fff" fillOpacity="0.13"/>
    <ellipse cx="85" cy="90" rx="30" ry="30" fill="#fff" fillOpacity="0.18"/>
    <ellipse cx="85" cy="90" rx="22" ry="22" fill="#e0e7ff" fillOpacity="0.18"/>
    <ellipse cx="85" cy="90" rx="16" ry="16" fill="#fff" fillOpacity="0.25"/>
    <ellipse cx="85" cy="90" rx="12" ry="12" fill="#e040fb" fillOpacity="0.18"/>
    <ellipse cx="85" cy="90" rx="8" ry="8" fill="#fff" fillOpacity="0.5"/>
    <ellipse cx="85" cy="90" rx="4" ry="4" fill="#fff" fillOpacity="0.8"/>
    <ellipse cx="85" cy="80" rx="32" ry="32" fill="#e0e7ff" fillOpacity="0.9" stroke="#fff" strokeWidth="3"/>
    <ellipse cx="75" cy="75" rx="8" ry="4" fill="#fff" fillOpacity="0.5"/>
    <rect x="65" y="110" width="40" height="30" rx="16" fill="#e0e7ff" fillOpacity="0.9" stroke="#fff" strokeWidth="3"/>
    <rect x="38" y="110" width="24" height="10" rx="5" fill="#e0e7ff" fillOpacity="0.9" stroke="#fff" strokeWidth="2"/>
    <rect x="108" y="110" width="24" height="10" rx="5" fill="#e0e7ff" fillOpacity="0.9" stroke="#fff" strokeWidth="2"/>
    <ellipse cx="85" cy="125" rx="8" ry="4" fill="#e040fb" fillOpacity="0.3"/>
  </svg>
);

const Section = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  padding-top: 110px;
  position: relative;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 2.5rem;
  gap: 2.5rem;
`;

const LeftCol = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AstronautCircle = styled.div`
  background: rgba(58,28,113,0.18);
  border-radius: 50%;
  width: 170px;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
`;

const Name = styled.h1`
  font-size: 2.7rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const Desc = styled.p`
  color: #bdbddd;
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
  font-weight: 500;
  letter-spacing: 1px;

  max-width: 370px;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 1.2rem;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StatNumber = styled.span`
  color: #e040fb;
  font-size: 1.5rem;
  font-weight: 700;
`;

const StatLabel = styled.span`
  color: #e0e7ff;
  font-size: 1rem;
`;

const SkillsCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const SkillCard = styled.div`
  background: rgba(24, 0, 48, 0.7);
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 #1a0551;
  padding: 1.2rem 1.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.1rem;
  font-weight: 500;
`;

const SkillImg = styled.div`
  width: 48px;
  height: 48px;
  background: #23243a;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
`;

const BottomRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  gap: 2rem;
  margin-top: 3.5rem;
  justify-content: space-between;
`;

const FloatingCard = styled(motion.div)`
  background: rgba(24, 0, 48, 0.7);
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 #1a0551;
  padding: 1.5rem 1.2rem;
  color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
`;


const ServiceTitle = styled.h3`
  color: #e0e7ff;
  font-size: 1.15rem;
  margin-bottom: 0.7rem;
`;

const ServiceDesc = styled.p`
  color: #bdbddd;
  font-size: 1rem;
`;

const Sobre = () => (
  <Section id="sobre">
    <TopRow>
      <LeftCol>
        <img src={rotateAstro} alt="Astronaut" style={{ width: '190px', height: '190px' }} />

        {/* <AstronautCircle>
          <AstronautSVG />
        </AstronautCircle> */}
        <Name>Olá, eu sou <span style={{color:'#e040fb'}}>Ana Beatriz</span></Name>
        <Desc> Desenvolvedora de sistemas com foco em desenvolvimento fullStack e mobile. Sou apaixonada por resolver problemas complexos. Ofereço serviços de programação e design digital para negócios e projetos criativos.</Desc>
        <StatsRow>
          <Stat>
            <StatNumber>10+</StatNumber>
            <StatLabel>Flutter</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>12+</StatNumber>
            <StatLabel>React</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>4+</StatNumber>
            <StatLabel>JS</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>10+</StatNumber>
            <StatLabel>Python</StatLabel>
          </Stat>
        </StatsRow>
      </LeftCol>
      <SkillsCol>
        <SkillCard>
          <SkillImg>     <img src={icon} alt="loading..." height={60} /></SkillImg> UI/UX Design <span style={{marginLeft:'auto', color:'#e0e7ff', fontWeight:400}}></span>
        </SkillCard>
        <SkillCard>
           <SkillImg>     <img src={alien} alt="loading..." height={60} /></SkillImg>FullStack Develop<span style={{marginLeft:'auto', color:'#e0e7ff', fontWeight:400}}>-</span>
        </SkillCard>
        <SkillCard>
             <SkillImg>     <img src={icon} alt="loading..." height={60} /></SkillImg>Mobile Develop<span style={{marginLeft:'auto', color:'#e0e7ff', fontWeight:400}}>-</span>
        </SkillCard>
      </SkillsCol>
    </TopRow>
    <BottomRow>
      <FloatingCard
  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
  animate={{ y: [0, -12, 0] }}
>
  <ServiceTitle>UI/UX Design</ServiceTitle>
  <ServiceDesc>Crie uma interface bonita e útil para seu app ou site, focada na melhor experiência para o usuário.</ServiceDesc>
</FloatingCard>

<FloatingCard
animate={{ y: [0, -12, 0] }}

  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
>
  <ServiceTitle>Web Programming</ServiceTitle>
  <ServiceDesc>Construa um site moderno com as melhores tecnologias e otimização para buscas.</ServiceDesc>
</FloatingCard>

<FloatingCard
animate={{ y: [0, -12, 0] }}
  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
>
  <ServiceTitle>Mobile Development</ServiceTitle>
  <ServiceDesc>Crie um app para seu negócio ou projeto pessoal com performance e design profissional.</ServiceDesc>
</FloatingCard>

    </BottomRow>
  </Section>
);

export default Sobre;
