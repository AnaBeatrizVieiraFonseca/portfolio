import React from 'react';
import styled from 'styled-components';
import logo from '../components/Foguetee.gif';
import jaxpos from '../components/jaxpos.mp4';
import two from '../components/two.png';
import tegg from '../components/tegg.png';
import pcRobo from '../components/pcRobo.jpeg';
import robo from '../components/robo.jpeg';
import sensores from '../components/sensores.jpeg';
import eu from '../components/eu.jpeg';

const Section = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
 
`;

const Title = styled.h2`
  font-size: 1.3rem;
  color: #e0e7ff;
  margin-bottom: 1.2rem;
  text-shadow: 0 0 8px #3a1c71;
  font-weight: 800;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  color: #bdbddd;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

const GalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`;

const GalleryCard = styled.div`
  width: 90vw;
  max-width: 340px;
  background: #23243a;
  border-radius: 12px;
  box-shadow: 0 2px 16px 0 #1a0551;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const images = [
  two,
  sensores,
  tegg,
  eu,
  pcRobo,
  robo,
];

const MobileProjetos = () => {
  return (
    <Section id="projetos-mobile">
      <img src={logo} alt="loading..." style={{width:'80px',marginBottom:'1rem'}} />
      <Title>02 PORTFÓLIO</Title>
      <Subtitle>MINHAS ÚLTIMAS PARTICIPAÇÕES. <span style={{color:'#e040fb'}}>VEJA MAIS &gt;</span></Subtitle>
      <GalleryWrapper>
        <GalleryCard>
          <video id="jaxpos" autoPlay muted loop style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px' }}>
            <source src={jaxpos} type="video/mp4" />
          </video>
        </GalleryCard>
        {images.map((img, idx) => (
          <GalleryCard key={idx}>
            <img src={img} alt={`Projeto ${idx + 1}`} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px' }} />
          </GalleryCard>
        ))}
      </GalleryWrapper>
    </Section>
  );
};

export default MobileProjetos;
