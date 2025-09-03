import React from 'react';
import styled from 'styled-components';


const IndividualSection = styled.section`
  width: 100vw;
  min-height: 1800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(to bottom, rgba(17,7,31,0) 0%, #11071F 12%, #11071F 88%, rgba(17,7,31,0) 100%);
  padding: 420px 0;
  box-sizing: border-box;
  position: relative;
`;

const ProjectRow = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: ${props => props.right ? 'flex-end' : 'flex-start'};
  margin-bottom: 100px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 45px;
  padding-right: 45px;
    @media (min-width: 1800px) {
     padding-left: 0px;
  max-width: 1400px;



  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 520px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
   @media (min-width: 1800px) {
    width: 700px;
    height: 446px;
  }
  @media (max-width: 1799px) {
    width: 530px;
    height: 346px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 540px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(118,60,172,0.72) 0%, rgba(118,60,172,0.22) 60%, rgba(118,60,172,0) 100%);
    filter: blur(70px);
    z-index: 0;
    pointer-events: none;
     @media (min-width: 1800px) {
       width: 1200px;
    height: 600px;
  }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  position: relative;
  z-index: 1;
  box-shadow: 0 8px 40px 0 #1a0551;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0px;
  left: ${props => props.right ? 'auto' : 'calc(80% - 30px)'};
  right: ${props => props.right ? 'calc(80% + 80px)' : 'auto'};
  width: 655px;
  min-height: 150px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  z-index: 2;
     @media (min-width: 1800px) {
     width: 850px;
     left: ${props => props.right ? 'auto' : 'calc(100%)'};
     right: ${props => props.right ? 'calc(80% + 80px)' : 'auto'};
     height: 546px;
  }
  @media (max-width: 1799px) {
    height: 546px;
  }
`;



const ProjectTitle = styled.h2`
  color: #e0e7ff;
  font-size: 2.1rem;
  margin-bottom: 0.7rem;
  margin-top: 0;
  align-self: ${props => props.right ? 'flex-start' : 'flex-end'};
`;
const StyleSubtitle = styled.span`
  font-family: 'Poppins', 'Arial', sans-serif;
  color: #9857D3;
  align-self: ${props => props.right ? 'flex-start' : 'flex-end'};
   font-weight:500;
    font-size: 1rem;
  `;

const ProjectDesc = styled.p`
  color: #d2d2ebff;
  font-size: 1.2rem;
  min-width: 600px;
  background: rgba(104, 59, 147, 0.26);
  border-radius: 18px;
  padding: 1.5rem 1.2rem;
  font-family: 'Poppins', 'Arial', sans-serif;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  @media (min-width: 1800px) {
    font-size: 1.5
    rem;
      font-weight: 0px;
  }
  @media (max-width: 1799px) {
    font-size: 1.2rem;
  }
`;

const IndividualProjetos = () => {
  return (
    <IndividualSection id="projetos-individuais">
        
      {/* Top Project: Info left, image right */}
      <ProjectRow>
        <div style={{position:'relative', width:'600px', minHeight:'320px'}}>
          <ImageWrapper>
            <ProjectImage src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Projeto" />
          </ImageWrapper>
          <InfoContainer >
            < StyleSubtitle>Desenvolvimento Solo</StyleSubtitle>

            <ProjectTitle>Example Project</ProjectTitle>
            <ProjectDesc>
                Desenvolvimento de um sistema em python para projeção de notas bimestrais para uma grande escola técnica. O projeto consiste na criação de páginas vinculandas a projeção de nota dos respectivos alunos. Os cálculos eram feitos  mediante a leitura de arquivo CSV.
            </ProjectDesc>
          </InfoContainer>
        </div>
      </ProjectRow>
      {/* Bottom Project: Info right, image left */}
      <ProjectRow right>
        <div style={{position:'relative', width:'600px', minHeight:'320px'}}>
          <ImageWrapper>
            <ProjectImage src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Projeto" />
          </ImageWrapper>
          <InfoContainer right>
            <StyleSubtitle right>Principais desenvolvimentos</StyleSubtitle>
            <ProjectTitle right> IOT residencial</ProjectTitle>
            <ProjectDesc>
                Desenvolvimento de um aplicativo responsivo em flutter para controle de dispositivos de automação residencial. O sistema realiza consultas e atualizações com banco de dados, utilizando queries otimizadas, incluindo integração com APIs externas para autenticação de usuários.
            </ProjectDesc>
          </InfoContainer>
        </div>
      </ProjectRow>
    </IndividualSection>
  );
};

export default IndividualProjetos;
