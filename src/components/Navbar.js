import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background: rgba(10, 4, 60, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 2px 16px 0 #1a0551;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 1px;
    transition: color 0.2s;
    padding: 8px 16px;
    border-radius: 8px;
    &:hover, &.active {
      color: #e040fb;
      background: rgba(58,28,113,0.2);
    }
  }
`;


const scrollToId = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar = () => (
  <Nav>
    <NavList>
      <NavItem><a href="#inicio" onClick={scrollToId('inicio')}>Início</a></NavItem>
      <NavItem><a href="#sobre" onClick={scrollToId('sobre')}>Sobre</a></NavItem>
      <NavItem><a href="#projetos" onClick={scrollToId('projetos')}>Projetos</a></NavItem>
      <NavItem><a href="#faculdade" onClick={scrollToId('faculdade')}>Experiência</a></NavItem>
      <NavItem><a href="#contato" onClick={scrollToId('contato')}>Contato</a></NavItem>
    </NavList>
  </Nav>
);

export default Navbar;
