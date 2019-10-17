import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';

import cour01 from '../../assets/img/courses/01.png'
import cour02 from '../../assets/img/courses/02.png'
import cour03 from '../../assets/img/courses/03.png'
import cour04 from '../../assets/img/courses/04.png'
import cour05 from '../../assets/img/courses/05.png'
import cour06 from '../../assets/img/courses/06.png'
import cour07 from '../../assets/img/courses/07.png'
import cour08 from '../../assets/img/courses/08.png'
import cour09 from '../../assets/img/courses/09.png'
import cour10 from '../../assets/img/courses/10.png'
import cour11 from '../../assets/img/courses/11.png'
import cour12 from '../../assets/img/courses/12.png'
import cour13 from '../../assets/img/courses/13.png'
import cour14 from '../../assets/img/courses/14.png'
import cour15 from '../../assets/img/courses/15.png'
import cour16 from '../../assets/img/courses/16.png'
import cour17 from '../../assets/img/courses/17.png'
import cour18 from '../../assets/img/courses/18.png'
import cour19 from '../../assets/img/courses/19.png'
import cour20 from '../../assets/img/courses/20.png'
import cour21 from '../../assets/img/courses/21.png'
import cour22 from '../../assets/img/courses/22.png'
import cour23 from '../../assets/img/courses/23.png'
import cour24 from '../../assets/img/courses/24.png'

import { Container } from './styles';



class Course extends Component {

    render() {
        return(
            <Container>
                
                <div className="header">
                    <img src={Hashtag}></img>
                </div>
                <div className="main">
                    <h2>Selecione o curso</h2>
                    <div className="courses">

                        <input className="checkmark" type="radio" id="cour01" name="choose"></input>
                        <label htmlFor="cour01"><span><img src={cour01}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour02" name="choose"></input>
                        <label htmlFor="cour02"><span><img src={cour02}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour03" name="choose"></input>
                        <label htmlFor="cour03"><span><img src={cour03}></img></span></label>

                        <input className="checkmark" type="radio" id="cour04" name="choose"></input>
                        <label htmlFor="cour04"><span><img src={cour04}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour05" name="choose"></input>
                        <label htmlFor="cour05"><span><img src={cour05}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour06" name="choose"></input>
                        <label htmlFor="cour06"><span><img src={cour06}></img></span></label>

                        <input className="checkmark" type="radio" id="cour07" name="choose"></input>
                        <label htmlFor="cour07"><span><img src={cour07}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour08" name="choose"></input>
                        <label htmlFor="cour08"><span><img src={cour08}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour09" name="choose"></input>
                        <label htmlFor="cour09"><span><img src={cour09}></img></span></label>

                        <input className="checkmark" type="radio" id="cour10" name="choose"></input>
                        <label htmlFor="cour10"><span><img src={cour10}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour11" name="choose"></input>
                        <label htmlFor="cour11"><span><img src={cour11}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour12" name="choose"></input>
                        <label htmlFor="cour12"><span><img src={cour12}></img></span></label>

                        <input className="checkmark" type="radio" id="cour13" name="choose"></input>
                        <label htmlFor="cour13"><span><img src={cour13}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour14" name="choose"></input>
                        <label htmlFor="cour14"><span><img src={cour14}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour15" name="choose"></input>
                        <label htmlFor="cour15"><span><img src={cour15}></img></span></label>

                        <input className="checkmark" type="radio" id="cour16" name="choose"></input>
                        <label htmlFor="cour16"><span><img src={cour16}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour17" name="choose"></input>
                        <label htmlFor="cour17"><span><img src={cour17}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour18" name="choose"></input>
                        <label htmlFor="cour18"><span><img src={cour18}></img></span></label>

                        <input className="checkmark" type="radio" id="cour19" name="choose"></input>
                        <label htmlFor="cour19"><span><img src={cour19}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour20" name="choose"></input>
                        <label htmlFor="cour20"><span><img src={cour20}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour21" name="choose"></input>
                        <label htmlFor="cour21"><span><img src={cour21}></img></span></label>

                        <input className="checkmark" type="radio" id="cour22" name="choose"></input>
                        <label htmlFor="cour22"><span><img src={cour22}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour23" name="choose"></input>
                        <label htmlFor="cour23"><span><img src={cour23}></img></span></label>
                        
                        <input className="checkmark" type="radio" id="cour24" name="choose"></input>
                        <label htmlFor="cour24"><span><img src={cour24}></img></span></label>
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

export default Course;
