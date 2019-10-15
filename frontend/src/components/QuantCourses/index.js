import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';



const QuantCourses = () => (
    <Container>
     <div className="header">
        <img src={Hashtag}></img>
    </div>
    <div className="main">
    <h1>Quantos cursos você fez na Rede e-Tec Brasil?</h1>

    <div className="choose">
        <div className="option">
            <input className="checkmark" type="radio" id="c1" name="choose"></input>
            <label htmlFor="c1">01</label>
        </div>
        <div className="option">
            <input className="checkmark" type="radio" id="c2" name="choose"></input>
            <label htmlFor="c2">02</label>
        </div>
        <div className="option">
            <input className="checkmark" type="radio" id="c3" name="choose"></input>
            <label htmlFor="c3">03</label>
        </div>
        <div className="option">
            <input className="checkmark" type="radio" id="c4" name="choose"></input>
            <label htmlFor="c4">04</label>
        </div>
        <div className="option">
            <input className="checkmark" type="radio" id="c5" name="choose"></input>
            <label htmlFor="c5">05</label>
        </div>
        <div className="option">
            <input className="checkmark" type="radio" id="c6" name="choose"></input>
            <label htmlFor="c6">06</label>
        </div>
        <div className="option">
            <input className="checkmark" type="radio" id="c7" name="choose"></input>
            <label htmlFor="c7">07</label>
        </div>
        <div className="option">
            <input className="checkmark" type="radio" id="c8" name="choose"></input>
            <label htmlFor="c8">08</label>
        </div>
        <div className="option">
            <input className="checkmark" type="radio" id="c9" name="choose"></input>
            <label htmlFor="c9">09</label>
        </div>
        <div className="option">
            <input className="checkmark" type="radio" id="c10" name="choose"></input>
            <label htmlFor="c10">10</label>
        </div>

    </div>



    </div>
    
    <div className="footer">
        <Link to='#'><button className="voltar" >Voltar</button></Link>
        <Link to='#'><button >Continuar</button></Link>
    </div>

    </Container>

)

export default QuantCourses;