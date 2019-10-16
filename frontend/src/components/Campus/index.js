import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';

import c01 from '../../assets/img/campus/01.png'
import c02 from '../../assets/img/campus/02.png'
import c03 from '../../assets/img/campus/03.png'

import { Container } from './styles';



class Campus extends Component {

    render() {
        return(
            <Container>
                
                <div className="header">
                    <img src={Hashtag}></img>
                </div>
                <div className="main">
                    <h2>Você se considera:</h2>
                    <div className="etinias">
                        <input className="checkmark" type="radio" id="c01" name="choose"></input>
                        <label htmlFor="c01"><span><img src={c01}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="c02" name="choose"></input>
                        <label htmlFor="c02"><span><img src={c02}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="c03" name="choose"></input>
                        <label htmlFor="c03"><span><img src={c03}></img></span></label>
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

export default Campus;
