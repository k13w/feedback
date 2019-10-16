import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Home = () => (
    <Container>
        <div className="main">
            <img src="imgs/logo.png" />
            <h1>Reconexão e-Tec</h1>
            <h3>Bem vindo</h3>
            <Link to='/about'><button>Iniciar</button></Link>
        </div>
    </Container>
)

export default Home;