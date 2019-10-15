import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';

const SameArea = () => (
    <Container>
    <div className="header">
        <img src={Hashtag}></img>
    </div>
    <div className="main">
        <h1>Hoje você estuda na mesma área da sua formação na Rede e-Tec Brasil?</h1>
        <div className="choose">
            <div className="option">
                <input className="checkmark" type="Radio" id="yes" name="choose" /*value="yes"*/ />
                <label htmlFor="yes">Sim</label>
            </div>
            <div className="option">
                <input className="checkmark" type="Radio" id="no" name="choose" /*value="no"*/ />
                <label htmlFor="no">Não</label>
            </div>

        </div>
        

    </div>
    <div className="footer">
        <Link to='#'><button className="voltar" >Voltar</button></Link>
        <Link to='#'><button >Continuar</button></Link>
    </div>
    </Container>
)
export default SameArea;
