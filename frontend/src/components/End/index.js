import React, { Component } from 'react';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';

class End extends Component {
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
                            <h1>E acabou...</h1>
                        )
                    }
                    {
                        this.state.step2 && (
                            <>
                                <h1>Ficamos muito felizes de você ter chegado até aqui!</h1>
                                <h1>Nos reconectar com você _______________________ nos deixou muito feliz :)</h1>
                            </>
                        )
                    }
                    {
                        this.state.step3 && (
                            <h1>Agradecemos imensamente a sua contribuição e esperamos te ver novamente em breve ;)</h1>
                            )
                        }
                    {
                        this.state.step4 && (
                            <h1>Obrigado!</h1>
                        )
                    }

                </div>
                <div className="footer">
                                    
                </div>
            </Container>
        );
    }
}

export default End;