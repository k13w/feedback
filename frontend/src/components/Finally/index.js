import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';


class Finally extends Component {
    constructor() {
        super()
        this.state = {
            show:false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show:true
            }) 
        }, 3000);
    }

    render() {
        return (
        <Container>
            <div className="header">
                <img src={Hashtag}></img>
            </div>
            <div className="main">
                {
                    this.state.show ?
                    <h1>Pressione o botão Avançar para continuar</h1>
                    :
                    <h1>Para finalizar, as próximas perguntas serão sobre a instituição.</h1>
                }
            </div>
            <div className="footer">
                <Link to='#'><button className="voltar" >Voltar</button></Link>
                {
                    this.state.show ? 
                    <Link to='#'><button >Continuar</button></Link>
                    :
                    <Link to='#'><button className="hidden">Continuar</button></Link>
                }
            
            </div>
        </Container>

        );
    }
}
 
export default Finally;
