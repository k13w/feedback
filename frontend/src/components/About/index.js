import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const About = () => (
    <Container>
    <div>
        <h1>Reconexão e-Tec</h1>
        <h2>Sobre o Reconexão</h2>
    </div>

    <div>
        <Link to='/warning'><button>Eu entendi e quero Continuar</button></Link>
    </div>
    </Container>
)

export default About;