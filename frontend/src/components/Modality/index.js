import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';



const Modality = () => (
    <Container>
     <div className="header">
        <img src={Hashtag}></img>
    </div>
    <div className="main">
    <h1>Selecione a modalidade do curso: </h1>
    <div className="choose">
            <div className="option">
                <input className="checkmark" type="Radio" id="concomitante" name="choose" /*value="concomitante"*/ />
                <label htmlFor="concomitante">Concomitante</label><br />
                <label htmlFor="concomitante">Você cursou o ensino técnico enqaunto cursava o ensino médio</label>
            </div>
            <div className="option">
                <input className="checkmark" type="Radio" id="subsequente" name="choose" /*value="subsequente"*/ />
                <label htmlFor="subsequente">Subsequente</label><br />
                <label htmlFor="subsequente">Você cursou o ensino técnico após ter concluído o ensino médio</label>
            </div>
        </div>
    </div>
    <div className="footer">
        <Link to='#'><button className="voltar" >Voltar</button></Link>
        <Link to='#'><button >Continuar</button></Link>
    </div>
    </Container>
)
export default Modality;