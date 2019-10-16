import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';

import g01 from '../../assets/img/gender/01.png'
import g02 from '../../assets/img/gender/02.png'
import g03 from '../../assets/img/gender/03.png'

import { Container } from './styles';



class Gender extends Component {

    render() {
        return(
            <Container>
                
                <div className="header">
                    <img src={Hashtag}></img>
                </div>
                <div className="main">
                    <h2>Você se considera:</h2>
                    <div className="etinias">
                        <input className="checkmark" type="radio" id="g01" name="choose"></input>
                        <label htmlFor="g01"><span><img src={g01}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="g02" name="choose"></input>
                        <label htmlFor="g02"><span><img src={g02}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="g03" name="choose"></input>
                        <label htmlFor="g03"><span><img src={g03}></img></span></label>
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

export default Gender;
