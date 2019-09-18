import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';

const About = () => (
    <Container>
    <div className="header">
        <img src={Hashtag}></img>
        {/* <h1>Reconexão e-Tec</h1> */}
        {/* <h2>Sobre o Reconexão</h2> */}
    </div>
    <div className="main">
        <h2>Sobre o Reconeção e-Tec</h2>
        <p>    Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Diuretics paradis num copo é motivis de denguis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>

        <p>     Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Casamentiss faiz malandris se pirulitá.</p>

        <p>     In elementis mé pra quem é amistosis quis leo. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis!</p>

        <p>     Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus. Leite de capivaris, leite de mula manquis sem cabeça. Detraxit consequat et quo num tendi nada.</p>

        <p>     Interagi no mé, cursus quis, vehicula ac nisi. A ordem dos tratores não altera o pão duris. Per aumento de cachacis, eu reclamis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.</p>

        <p>     Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Viva Forevis aptent taciti sociosqu ad litora torquent.  Manduma pindureta quium dia nois paga. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
        
    </div>
    <div className="footer">
        <Link to='/'><button className="voltar" >Voltar</button></Link>
        <Link to='/warning'><button >Eu entendi e quero Continuar</button></Link>
    </div>
    </Container>
)

export default About;