import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';

import m01 from '../../assets/img/m_ethnic/01.png';
import m02 from '../../assets/img/m_ethnic/02.png';
import m03 from '../../assets/img/m_ethnic/03.png';
import m04 from '../../assets/img/m_ethnic/04.png';
import m05 from '../../assets/img/m_ethnic/05.png';

// import f01 from '../../assets/img/f_ethnic/01.png';
// import f02 from '../../assets/img/f_ethnic/02.png';
// import f03 from '../../assets/img/f_ethnic/03.png';
// import f04 from '../../assets/img/f_ethnic/04.png';
// import f05 from '../../assets/img/f_ethnic/05.png';

// import l01 from '../../assets/img/l_ethnic/01.png';
// import l02 from '../../assets/img/l_ethnic/02.png';
// import l03 from '../../assets/img/l_ethnic/03.png';
// import l04 from '../../assets/img/l_ethnic/04.png';
// import l05 from '../../assets/img/l_ethnic/05.png';


import { Container } from './styles';




class Ethnic extends Component {

    render() {
        return(
            <Container>
                
                <div className="header">
                    <img src={Hashtag}></img>
                </div>
                <div className="main">
                    <h2>Você se considera:</h2>
                    <div className="etinias">
                        <input className="checkmark" type="radio" id="e01" name="choose"></input>
                        <label htmlFor="e01"><span><img src={m01}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="e02" name="choose"></input>
                        <label htmlFor="e02"><span><img src={m02}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="e03" name="choose"></input>
                        <label htmlFor="e03"><span><img src={m03}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="e04" name="choose"></input>
                        <label htmlFor="e04"><span><img src={m04}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="e05" name="choose"></input>
                        <label htmlFor="e05"><span><img src={m05}></img></span></label>
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

export default Ethnic;