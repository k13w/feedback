import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';

class Thankyou extends Component {
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
                            <h1>Muito obrigado por nos disponibilizar seus dados para contato :D</h1>
                        )
                    }
                    {
                        this.state.step2 && (
                            <h1>Agora, ao fim deste questionário poderemos te enviar um e-mail bem legal</h1>
                        )
                    }
                    {
                        this.state.step3 && (
                            <h1>Vamos iniciar o questionário querendo saber um pouco sobre sua vida. A primeira categoria a ser respondida é sobre sua família e onde habitam</h1>
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

export default Thankyou;