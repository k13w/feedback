import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';


import { Container } from './styles';

const Warning = () => (
    <Container>
    <div className="header">
        {/* <h1>Reconexão e-Tec</h1>
        <h2>Avisos, dicas e sugestões</h2> */}
        <img src={Hashtag}></img>
    </div>
    <div className="main">


    </div>
    <div className="footer">
        <Link to='/about'><button className="voltar" >Voltar</button></Link>
        <Link to='/continue'><button>Continuar</button></Link>
    </div>
    </Container>
)

export default Warning;