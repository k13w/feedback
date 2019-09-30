import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';

const Email = () => (
    <Container>
    <div className="header">
        <img src={Hashtag}></img>
    </div>
    <div className="main">
        <div className="inputEmail">
            <label>E-Mail</label>
            <input type="email"></input>
        </div>

    </div>
    <div className="footer">
        <Link to='#'><button className="voltar" >Voltar</button></Link>
        <Link to='#'><button >Continuar</button></Link>
    </div>
    </Container>
)
export default Email;