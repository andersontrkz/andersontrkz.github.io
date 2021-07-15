import { Box } from '@material-ui/core';
import TagCloud from 'react3dtagcloud'

import './../styles/about.css'

function About () {
  const tags = [
    'Angular',
    'Context',
    'Delphi',
    'JavaScript',
    'Jest',
    'Laravel',
    'MySQL',
    'Node.js',
    'PHP',
    'React.js',
    'Redux',
    'RTL',
    'SpringBoot',
  ]

  return(
    <Box className="main-about-component">
      <Box className="main-about-box">
        <h3 className="main-about-title">Sobre</h3>
        <p className="main-about-text">
          Sou o Anderson, mas pode me chamar de Turkão, assim como meus amigos.
          Nascido na cidade de Guarapuava, localizada no interior do Paraná, Brasil.
        </p>
        <p className="main-about-text">
          Sou apaixonado por programação, paixão essa que me levou a desenvolver meu
          primeiro software com 15 anos.
        </p>
        <p className="main-about-text">
          Desde o inicio da minha carreira profissional, tive uma jornada desafiadora,
          rica em conhecimentos e experiencias, onde tive a oportunidade de adquirir background
          nas áreas da saúde, segurança do trabalho, eletromecânica e automação industrial.
        </p>
        <p className="main-about-text">
          Atualmente me dedico exclusivamente ao desenvolvimento de software.
          Busco aplicar as melhores práticas de programação em meus trabalhos,
          Também procuro ficar atualizado no mundo da tacnologia, 
        </p>
        <p className="main-about-text">
          Visite meu perfil no LinkedIn para mais detalhes, ou se preferir, me envie uma mensagem.
        </p>
      </Box>
      <Box className="main-cloud-container">
        <Box className="main-cloud-container-box">
            <TagCloud url="" tagName={ tags } onClick={ (event) => event.preventDefault()}></TagCloud>
        </Box>
        </Box>
    </Box>
  );
}

export default About;