import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const About = () => (
    <Container>
    <div className="header">
        <h1>Reconexão e-Tec</h1>
        <h2>Sobre o Reconexão</h2>
    </div>

    <div className="footer">
        <Link to='/'><button className="voltar" >Voltar</button></Link>
        <Link to='/warning'><button >Eu entendi e quero Continuar</button></Link>
    </div>
    </Container>
)

export default About;