import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';

const Continue = () => (
    <Container>
    <div className="header">
        <img src={Hashtag}></img>
    </div>
    <div className="main">
        <p>Ótimo, agora você já sabe sobre nós!<br />
        Queremos saber um pouco mai sobre você, vamos iniciar
        com a sua identificação.</p>

        <p>Pressione <b>Continuar</b></p>

    </div>
    <div className="footer">
        <Link to='/warning'><button className="voltar" >Voltar</button></Link>
        <Link to='/user'><button >Continuar</button></Link>
    </div>
    </Container>
)

export default Continue;