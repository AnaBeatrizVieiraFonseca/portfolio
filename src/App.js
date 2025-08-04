import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import ProjetosFaculdade from './components/ProjetosFaculdade';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', 'Roboto', Arial, sans-serif;
    background: #0a043c;
    color: #fff;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', 'Roboto', Arial, sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
  }
`;

const MainContainer = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <GalaxyBackground />
      <Navbar />
      <MainContainer>
        <div id="inicio" />
        <Sobre />
        <Projetos />
        <ProjetosFaculdade />
      </MainContainer>
    </>
  );
}


// ...existing code...
export default App;
