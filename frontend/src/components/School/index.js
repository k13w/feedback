import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';

const Parents = () => (
    <Container>
        <div className="header">
            <img src={Hashtag}></img>
        </div>
        <div className="main">
        <h2>Em que tipo de escola você estudou a maior parte do ensino médio</h2>
        <select>

            <option value="publica">Escola Publica</option>
            <option value="particular">Escola Particular</option>
        </select>
            
        </div>
        <div className="footer">
            <Link to='#'><button className="voltar" >Voltar</button></Link>
            <Link to='#'><button >Continuar</button></Link>
        </div>
    </Container>
)
export default Parents;