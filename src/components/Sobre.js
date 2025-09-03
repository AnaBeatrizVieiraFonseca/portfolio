import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import icon from './estrangeiro.png'; 
import alien from './alien.png';
import rotateAstro from './RotateStro.gif'; 

// SVG Astronauta


const Section = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  padding-top: 120px;
  position: relative;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 3.5rem;
  gap: 3.5rem;
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
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Name = styled.h1`
  font-size: 3.7rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 2px;
`;

const Desc = styled.p`
  color: #bdbddd;
  font-size: 1.5rem;
  margin-bottom: 3.5rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  max-width: 500px;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 3.5rem;
  margin-top: 2rem;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StatNumber = styled.span`
  color: #e040fb;
  font-size: 2.2rem;
  font-weight: 700;
`;

const StatLabel = styled.span`
  color: #e0e7ff;
  font-size: 1.3rem;
`;

const SkillsCol = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  
`;

const SkillCard = styled.div`
  background: rgba(24, 0, 48, 0.7);
  border-radius: 24px;
  box-shadow: 0 4px 32px 0 #1a0551;
  padding: 1.2rem 1rem;
  color: #fff;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.7rem;
  justify-content: space-between;
  font-weight: 500;
  width: 100%;
 

`;

const SkillImg = styled.div`
  width: 80px;
  height: 80px;
  background: #23243a;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.7rem;
`;

const BottomRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1600px;
  gap: 3.5rem;
  margin-top: 4rem;
  justify-content: space-between;
`;

const FloatingCard = styled(motion.div)`
  background: rgba(24, 0, 48, 0.7);
  border-radius: 24px;
  box-shadow: 0 4px 32px 0 #1a0551;
  padding: 1.5rem 2rem;
  color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  max-width: 550px;
  width: 100%;
  font-size: 2rem;
`;


const ServiceTitle = styled.h3`
  color: #e0e7ff;
  font-size: 1.7rem;
  margin-bottom: 1.2rem;
`;

const ServiceDesc = styled.p`
  color: #bdbddd;
  font-size: 1.5rem;
`;

const Sobre = () => (
  <Section id="sobre">
    <TopRow>
      <LeftCol>
        <img src={rotateAstro} alt="Astronaut" style={{ width: '280px', height: '280px' }} />

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
          <SkillImg> <img src={icon} alt="loading..." height={85} /></SkillImg> UI/UX Design <span style={{marginLeft:'auto', color:'#e0e7ff', fontWeight:400}}>-</span>
        </SkillCard>
         
         <SkillCard>
          
           <SkillImg>     <img src={alien} alt="loading..." height={85} /></SkillImg>FullStack Develop<span style={{marginLeft:'auto', color:'#e0e7ff', fontWeight:400}}>-</span> 
        </SkillCard>
        
        <SkillCard>
             <SkillImg>     <img src={icon} alt="loading..." height={85} /></SkillImg>Mobile Develop<span style={{marginLeft:'auto', color:'#e0e7ff', fontWeight:400}}>-</span>
        </SkillCard>
     
    
      </SkillsCol> 
    </TopRow>
    <BottomRow>
      <FloatingCard
  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
  animate={{ y: [0, -12, 0] }}
>
  <ServiceTitle>UI/UX Design</ServiceTitle>
  <ServiceDesc>Crio interfaces  funcionais e eficientes, que atendem às necessidades do usuário focando sempre em uma melhor experiência de interação e design.</ServiceDesc>
</FloatingCard>

 <FloatingCard
animate={{ y: [0, -12, 0] }}

  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
>
 
  <ServiceTitle>Web Programming</ServiceTitle>
  <ServiceDesc>Desenvolvo websites otimizadas para SEO utilizando princípios de Clean Code. Implemento arquiteturas baseadas em padrões de design como MVC e MVVM, e realizo integrações com APIs externas, priorizando compatibilidade, segurança e performance.</ServiceDesc>

  </FloatingCard> 

 <FloatingCard
animate={{ y: [0, -12, 0] }}
  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
>
  
  <ServiceTitle>Mobile Development</ServiceTitle>
  <ServiceDesc>Desenvolvo aplicativos com o uso de arquitetura limpa. Implemento soluções responsivas, otimizadas para uma experiência de usuário fluida, com alto desempenho. Experiência comprovada com  frameworks modernos como Flutter, React Native e Kotlin.</ServiceDesc>

  </FloatingCard>

    </BottomRow>
  </Section>
);

export default Sobre;
