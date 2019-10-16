import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';

import loc01 from '../../assets/img/location/01.png'
import loc02 from '../../assets/img/location/02.png'

import { Container } from './styles';



class Gender extends Component {

    render() {
        return(
            <Container>
                
                <div className="header">
                    <img src={Hashtag}></img>
                </div>
                <div className="main">
                    <h2>Você mora em:</h2>
                    <div className="etinias">
                        <input className="checkmark" type="radio" id="loc01" name="choose"></input>
                        <label htmlFor="loc01"><span><img src={loc01}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="loc02" name="choose"></input>
                        <label htmlFor="loc02"><span><img src={loc02}></img></span></label>
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
