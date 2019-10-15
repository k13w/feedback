import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';
import { phoneMask } from '../../utils/masks';

const Phone = () => {

    const [state, setVerification] = useState('');
    
    return (
        <Container>
        <div className="header">
            <img src={Hashtag}></img>
        </div>
        <div className="main">
            <div className="inputPhone">
                <label>Telefone</label>
                <input
                    type="text" 
                    placeholder="(00) 0.0000-0000"
                    maxLength="16"
                    value = {state}
                    onChange={e => setVerification(phoneMask(e.target.value))}
                />
            </div>

        </div>
        <div className="footer">
            <Link to='#'><button className="voltar" >Voltar</button></Link>
            <Link to='#'><button >Continuar</button></Link>
        </div>
        </Container>
    )
}
export default Phone;