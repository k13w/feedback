import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';


class IsBR extends Component {
    constructor() {
        super()
    }


    render() {
        return(
            <Container>
                <div className="header">
                    <img src={Hashtag}></img>
                </div>
                <div className="main">
                    <h2>Você nasceu no Brasil? </h2>
                    <div className="btns">
                        <input className="checkmark" type="radio" id="sim" name="choose"></input>
                        <label htmlFor="sim"><span>Sim</span></label>
                        <input className="checkmark" type="radio" id="nao" name="choose"></input>
                        <label htmlFor="nao"><span>Nao</span></label>
                    </div>
                </div>
                <div className="footer">
                    <Link to='#'><button className="voltar" >Voltar</button></Link>
                    <Link to='#'><button >Continuar</button></Link>
                
                </div>
            </Container>
        )
    }
}

export default IsBR;