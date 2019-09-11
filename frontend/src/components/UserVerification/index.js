import React, { useState } from 'react';
import { Header, Container, Panel, Verification } from './styles';
import { withRouter } from "react-router-dom";
import api from '../../services/api';
import { login } from '../../services/auth';
import { cpfMask } from '../../utils/masks';

const UserVerification = ({ history }) => {
    const [verification, setVerification] = useState('');
    const [error, setError] = useState('');

    const handleSingIn = async (e) => {
        e.preventDefault()

        const cpf = verification;
    
        if(!cpf) {
            console.log("cpf nao valido")
            setError('preencha um cpf valido')
        } else {
            try {
                const res = await api.post('/auth', { cpf });
                login(res.data.token)
                history.push('/welcome')
                
            } catch(err) {
                setError('houve um problema ao logar')
            }
        }
    
    }
    return(
        <Container>
            <Header>
                <h1>Reconexão e-Tec</h1>
                <h2>Por favor, identifique-se</h2>
            </Header>

            <Panel>
                <Verification onSubmit={handleSingIn}>
                    <div>
                        <label>Digite seu CPF</label>
                        <input
                            type="text" 
                            placeholder="000.000.000-00"
                            maxLength="14"
                            value={verification}
                            onChange={e => setVerification(cpfMask(e.target.value))}
                        />
                    </div>
                    <div>
                        <button className="btn-proximo">Próximo</button>     
                    </div>
                </Verification>
            </Panel>
        </Container>
    )
}

export default withRouter(UserVerification);