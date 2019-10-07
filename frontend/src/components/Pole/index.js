import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';



const Pole = () => (
    <Container>
     <div className="header">
        <img src={Hashtag}></img>
    </div>
    <div className="main">
    <h1>Selecione o polo onde cursou </h1>
    <div className="choose">
            <div className="option">
                <input className="checkmark" type="Radio" id="ufrn" name="choose" /*value="ufrn"*/ />
                <label htmlFor="ufrn">UFRN</label>
            </div>
            <div className="option">
                <input className="checkmark" type="Radio" id="imd" name="choose" /*value="imd"*/ />
                <label htmlFor="imd">IMD</label>
            </div>
            <div className="option">
                <input className="checkmark" type="Radio" id="eaj" name="choose" /*value="eaj"*/ />
                <label htmlFor="eaj">EAJ</label>
            </div>

        </div>
    </div>
    <div className="footer">
        <Link to='#'><button className="voltar" >Voltar</button></Link>
        <Link to='#'><button >Continuar</button></Link>
    </div>
    </Container>
)
export default Pole;