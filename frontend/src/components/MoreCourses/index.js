import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';

const MoreCourses = () => (
    <Container>
    <div className="header">
        <img src={Hashtag}></img>
    </div>
    <div className="main">
        <h1>Você realizou mais de um curso conosco?</h1>
        <div className="choose">
            <div className="option">
                <input className="checkmark" type="Radio" id="yes" name="choose" /*value="yes"*/ />
                <label htmlFor="yes"><span>Sim</span></label>
            </div>
            <div className="option">
                <input className="checkmark" type="Radio" id="no" name="choose" /*value="no"*/ />
                <label htmlFor="no"><span>Não</span></label>
            </div>

        </div>
        

    </div>
    <div className="footer">
        <Link to='#'><button className="voltar" >Voltar</button></Link>
        <Link to='#'><button >Continuar</button></Link>
    </div>
    </Container>
)
export default MoreCourses;
