import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';

const CourseLevel = () => (
    <Container>
    <div className="header">
        <img src={Hashtag}></img>
    </div>
    <div className="main">
        <select>
            <option value="tecnico">Técnico</option>
            <option value="tecnologo">Tecnólogo</option>
            <option value="bacharel">Bacharelado</option>
            <option value="licenciatura">Licenciatura</option>
        </select>
    </div>
    <div className="footer">
        <Link to='/warning'><button className="voltar" >Voltar</button></Link>
        <Link to='/user'><button >Continuar</button></Link>
    </div>
    </Container>
)

export default CourseLevel;