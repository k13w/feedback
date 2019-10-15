// import React from 'react';
// import { getToken } from '../../services/auth';
// import jwt from 'jwt-decode';

// const Feed = () => {

//     const token = getToken()
//     const decoded = jwt(token)

//     return(
//         <h1>Seja bem vindo (a) {decoded.name}</h1>
//     )
// }

// export default Feed;

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';

class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            step1: true,
            step2: false,
            step3: false,
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                step1: false,
                step2: true,
                step3: false
            })
            setTimeout(() => {
                this.setState({
                    step1: false,
                    step2: false,
                    step3: true
                })
            }, 3000)
        }, 3000)
    }

    render() {
        return (
            <Container>
                <div className="header">
                    <img src={Hashtag}></img>
                </div>
                <div className="main">
                    {
                        this.state.step1 && (
                            <h1>Seja bem-vindo (a) Fulano de Tal, que bom que você está aqui!</h1>
                        )
                    }
                    {
                        this.state.step2 && (
                            <h1>Para melhor te conhecer, vamos iniciar fazendo algumas perguntas sobre você</h1>
                        )
                    }
                    {
                        this.state.step3 && (
                            <h1>Pressione o botão Avançar para continuar</h1>
                        )
                    }

                </div>
                <div className="footer">
                    <Link to='#'><button className="voltar" >Voltar</button></Link>
                    {
                        this.state.step3 ? 
                        <Link to='#'><button >Avançar</button></Link>
                        :
                        <Link to='#'><button className="hidden">Avançar</button></Link>
                    }
                
                </div>
            </Container>
        );
    }
}

export default Welcome;