import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';

class OurHistory extends Component {
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
                            <h1>As próximas perguntas são sobre nossa história :3
                            </h1>
                        )
                    }
                    {
                        this.state.step2 && (
                            <h1>Queremos saber sobre sua experiência com a Rede e-Tec Brasil</h1>
                        )
                    }
                    {
                        this.state.step3 && (
                            <>
                            <h1>Para isso, vamos fazer algumas perguntas relacionadas ao(s) curso(s) que você realizou conosco.</h1>
                            <h1>Estamos ansiosos para saber como foi sua experiência :D</h1>
                            </>
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

export default OurHistory;