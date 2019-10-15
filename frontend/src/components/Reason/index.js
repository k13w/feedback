import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';



const Reason = () => (
    <Container>
     <div className="header">
        <img src={Hashtag}></img>
    </div>
    <div className="main">
    <h1>Por qual motivo?</h1>
    <textarea rows={20} cols={70}>
        
    </textarea>
    
    </div>
    <div className="footer">
        <Link to='#'><button className="voltar" >Voltar</button></Link>
        <Link to='#'><button >Continuar</button></Link>
    </div>
    </Container>
)
export default Reason;