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

class Hello extends Component {
    constructor() {
        super()
        this.state = {
            step1: true,
            step2: false,
            step3: false,
            step4: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                step1: false,
                step2: true,
                step3: false,
                step4: false
            })
            setTimeout(() => {
                setTimeout(() => {
                    this.setState({
                        step1: false,
                        step2: false,
                        step3: false,
                        step4: true
                    })
                }, 5000)
                this.setState({
                    step1: false,
                    step2: false,
                    step3: true,
                    step4: false
                })
            }, 5000)
        }, 5000)
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
                            <h1>Fulano de Tal, muito bom te conhecer melhor! Ficamos profundamente agradecidos com sua contribuição</h1>
                        )
                    }
                    {
                        this.state.step2 && (
                            <h1>Agora, antes de começarmos com o questionário sobre sua jornada conosco, precisamos que você nos informe seus dados para contato</h1>
                        )
                    }
                    {
                        this.state.step3 && (
                            <h1>Mas não se preocupe!
                            Seus dados estão seguros conosco e serão utilizados somente pela nossa coordenação para entrar em contato com você, caso haja necessidade</h1>
                        )
                    }
                    {
                        this.state.step4 && (
                            <h1>Pressione o botão Avançar para continuar</h1>
                        )
                    }

                </div>
                <div className="footer">
                    <Link to='#'><button className="voltar" >Voltar</button></Link>
                    {
                        this.state.step4 ? 
                        <Link to='#'><button >Avançar</button></Link>
                        :
                        <Link to='#'><button className="hidden">Avançar</button></Link>
                    }
                
                </div>
            </Container>
        );
    }
}

export default Hello;