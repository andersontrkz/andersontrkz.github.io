import { Box } from '@material-ui/core'
import { useContext, useEffect } from 'react';
import Typing from 'react-typing-animation';
import Context from '../../context/Context'
import { Link } from 'react-router-dom';

import Particles from 'particlesjs';
import './../styles/home.css';

export default function HomeScreen () {
  const { switchOn } = useContext(Context)

  useEffect(() => {
    Particles.init({
      selector: '.home-background',
      color: switchOn ? '#e1e1e1' : '#441c9e',
      connectParticles: true,
      speed: 0.25,
      minDistance: 60,
      sizeVariations: 6,
      maxParticles: 75,
    })
  }, [switchOn])

  const typePhrase = () => {
    return (<Box>
      <Typing speed={5}>
        <span>Bem vindo ao meu portfolio pessoal, é um prazer ter você por aqui!!!</span>
        <Typing.Backspace speed={1} count={59} />
        <span  className="home-main-container-message">. <Link to="/contact">Me envie uma mensagem ;) </Link></span>
      </Typing></Box>
    )
  }

  return (
  <Box className="main-background">
    <Box className="home-screen-box home-main-container">
      <h1 >Olá,</h1>
      <h1>Sou o Anderson</h1>
      <h1>Desenvolvedor Web</h1>
      
      { typePhrase() }

      <canvas className="home-background"></canvas>
    </Box>
  </Box>
  )
}