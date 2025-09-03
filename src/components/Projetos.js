
import React from 'react';
import styled from 'styled-components';
import logo from './Foguetee.gif';
import jaxpos from './jaxpos.mp4';
import two from './two.png';
import tegg from './tegg.png';
import pcRobo from './pcRobo.jpeg';
import robo from './robo.jpeg';
import sensores from './sensores.jpeg';
import eu from './eu.jpeg';
import IndividualProjetos from './IndividualProjetos';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;

`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #e0e7ff;
  margin-bottom: 2.5rem;
  text-shadow: 0 0 12px #3a1c71;
  font-weight: 800;
  letter-spacing: 2px;
`;

const GalleryWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  min-height: 480px;
`;

const GalleryImage = styled.div`
  position: absolute;
  box-shadow: 0 2px 24px 0 #1a0551;
  border-radius: 9px;
  background: #23243a;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 6px 32px 0 #e040fb;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 10px;
    filter: brightness(0.93) contrast(1.08);
    transition: filter 0.2s;
  }
`;

const PhoneMockup = styled.div`
  width: 320px;
  height: 660px;
  background: #181a2a;
  border-radius: 36px;
  box-shadow: 0 8px 40px 0 #1a0551, 0 0 0 8px #23243a;
  border: 4px solid #33344a;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 8px;
    background: #22243a;
    border-radius: 8px;
    opacity: 0.5;
    z-index: 3;
  }
`;

const Subtitle = styled.p`
  color: #bdbddd;
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
  font-weight: 500;
  letter-spacing: 1px;
`;


const images = [
 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
 sensores,
 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
 eu,
   pcRobo,
   
   robo,

];

const phoneWidth = 420;
const phoneHeight = 840;
const galleryLayout = [
 

  { top: 190, left: 'calc(50% - 550px)', width: 350, height: 250, zIndex: 3 },

    { top: 480, left: 'calc(50% - 390px)', width: 190, height: 270, zIndex: 2 },
      { top: 560, left: 'calc(50% - 590px)', width: 170, height: 250, zIndex: 2 },
  
  
  { top: 40, left: '50%', width: phoneWidth, height: phoneHeight, zIndex: 4, isPhone: true, center: true },
  { top: 500, left: 'calc(50% + 210px)', width: 350, height: 250, zIndex: 3 },
  { top: 200, left: 'calc(50% + 210px)',  width: 190, height: 270, zIndex: 2},
  { top: 100, left: 'calc(50% + 420px)', width: 170, height: 250, zIndex: 2 },
];

const Projetos = () => {
  return (
    <>
      <Section id="projetos">
        <img src={logo} alt="loading..." />
        <Title style={{ marginTop: '8rem' }}>02 PORTFÓLIO</Title>
        <Subtitle>MINHAS ÚLTIMAS PARTICIPAÇÕES. <span style={{color:'#e040fb'}}>VEJA MAIS &gt;</span></Subtitle>
        <GalleryWrapper style={{height: 1000, width: '100%', maxWidth: 1500, margin: '0 auto', position: 'relative'}}>
          {galleryLayout.map((layout, idx) => {
            const style = {
              top: layout.top,
              left: layout.left,
              width: layout.width,
              height: layout.height,
              zIndex: layout.zIndex,
              transform: layout.center ? 'translateX(-50%)' : undefined,
              padding: layout.isPhone ? 0 : undefined,
              background: layout.isPhone ? 'none' : undefined,
              boxShadow: layout.isPhone ? 'none' : undefined,
            };
            return layout.isPhone ? (
              <GalleryImage key={idx} style={style}>
                <PhoneMockup>
                    <video id="jaxpos" autoPlay muted loop style={{ width: '100%', height: '100%',  objectFit: 'cover' }}>
            <source src={jaxpos} type="video/mp4"  />
          </video>
                  {/* <video src={jaxpos} alt={`Projeto`} style={{ width: '100%', height: '100%',  objectFit: 'cover' }} /> */}
                </PhoneMockup>
              </GalleryImage>
            ) : (
              
              <GalleryImage key={idx} style={style}>
                <img src={images[idx]} alt={`Projeto ${idx + 1}`} />
              </GalleryImage>
            );
          })}
        </GalleryWrapper>
      </Section>
      <IndividualProjetos />
    </>
  );
};

export default Projetos;
