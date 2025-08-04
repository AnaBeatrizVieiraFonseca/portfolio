import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;

const moveClouds = keyframes`
  0% { background-position: 0 0, 0 0; }
  100% { background-position: 1000px 0, 800px 0; }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at 60% 40%, #3a1c71 0%, #0f044c 80%, #000 100%);
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 200vw;
    height: 200vh;
    left: -50vw;
    top: -50vh;
    background: url('https://svgshare.com/i/13wF.svg'); /* SVG de estrelas */
    opacity: 0.7;
    animation: ${twinkle} 3s infinite alternate;
  }
  &::after {
    content: '';
    position: absolute;
    width: 200vw;
    height: 200vh;
    left: -50vw;
    top: -50vh;
    background: url('https://svgshare.com/i/13wG.svg'); /* SVG de nuvens cósmicas */
    opacity: 0.3;
    animation: ${moveClouds} 60s linear infinite;
  }
`;



const StarCanvas = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const comets = useRef([]);
  const STAR_COUNT = 120;
  const COMET_COUNT = 4;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Função para gerar estrelas
    function createStars() {
      stars.current = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.2 + 0.3,
          speed: Math.random() * 0.15 + 0.05,
          alpha: Math.random() * 0.5 + 0.5,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    }


    // Função para gerar cometas
    function createComets() {
      comets.current = [];
      for (let i = 0; i < COMET_COUNT; i++) {
        const angle = Math.random() * Math.PI / 3 + Math.PI / 6; // entre 30° e 60°
        comets.current.push({
          x: Math.random() * width,
          y: -Math.random() * height * 0.5,
          vx: Math.cos(angle) * (Math.random() * 3 + 2),
          vy: Math.sin(angle) * (Math.random() * 3 + 2),
          length: Math.random() * 80 + 60,
          alpha: Math.random() * 0.3 + 0.4,
          color: 'rgba(255,255,255,0.85)',
          tailColor: 'rgba(224,64,251,0.25)',
        });
      }
    }

    createStars();
    createComets();


    function drawComets() {
      for (let comet of comets.current) {
        // Cabeça do cometa
        ctx.save();
        ctx.globalAlpha = comet.alpha;
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = comet.color;
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 16;
        ctx.fill();
        // Cauda
        const tailX = comet.x - comet.vx * comet.length;
        const tailY = comet.y - comet.vy * comet.length;
        const grad = ctx.createLinearGradient(comet.x, comet.y, tailX, tailY);
        grad.addColorStop(0, comet.color);
        grad.addColorStop(1, comet.tailColor);
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(tailX, tailY);
        ctx.lineWidth = 5;
        ctx.strokeStyle = grad;
        ctx.stroke();
        ctx.restore();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      // ...planetas removidos...
      for (let star of stars.current) {
        // Twinkle
        star.twinkle += 0.02;
        let twinkleAlpha = star.alpha + Math.sin(star.twinkle) * 0.2;
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, twinkleAlpha));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        // Movimento lento para baixo (efeito de "profundidade")
        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      }
      // Atualiza e desenha cometas
      for (let comet of comets.current) {
        comet.x += comet.vx;
        comet.y += comet.vy;
        // Se sair da tela, reinicia
        if (comet.x > width + 100 || comet.y > height + 100) {
          const angle = Math.random() * Math.PI / 3 + Math.PI / 6;
          comet.x = Math.random() * width;
          comet.y = -Math.random() * height * 0.5;
          comet.vx = Math.cos(angle) * (Math.random() * 3 + 2);
          comet.vy = Math.sin(angle) * (Math.random() * 3 + 2);
          comet.length = Math.random() * 80 + 60;
        }
      }
      drawComets();
      requestAnimationFrame(animate);
    }

    animate();

    // Responsivo
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createStars();
      // ...planetas removidos...
      createComets();
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
};

const GalaxyBackground = () => (
  <>
    <Background />
    <StarCanvas />
  </>
);

export default GalaxyBackground;
