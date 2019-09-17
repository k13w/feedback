import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Warning = () => (
    <Container>
    <div className="header">
        <h1>Reconexão e-Tec</h1>
        <h2>Avisos, dicas e sugestões</h2>
    </div>

    <div className="footer">
        <Link to='/about'><button className="voltar" >Voltar</button></Link>
        <Link to='/user'><button>Continuar</button></Link>
    </div>
    </Container>
)

export default Warning;