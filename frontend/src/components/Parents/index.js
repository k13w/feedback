import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';

const School = () => (
    <Container>
    <div className="header">
        <img src={Hashtag}></img>
    </div>
    <div className="main">
        
        <label>Escolaridade da mãe </label> <br/>
        <select>
        <option value="analfabeto"> Analfabeto</option>
            <option value="MfundamentalInc"> Ensino fundamental incompleto</option>
            <option value="MfundamentalCom"> Ensino fundamental completo</option>
            <option value="MmedioInc"> Ensino médio incompleto</option>
            <option value="MmedioCom"> Ensino médio completo</option>
            <option value="Msuperior"> Superior completo (ou graduação)</option>
            <option value="MposGradu"> Pós-graduação</option>
            <option value="Mmestre"> Mestrado</option>
            <option value="Mdoutorado"> Doutorado</option>
            <option value="MposDoutorado"> Pós-Doutorado</option>
        </select>
        <br/>
        <label>Escolaridade do pai </label><br/>
        <select>
        <option value="analfabeto"> Analfabeto</option>
            <option value="PfundamentalInc"> Ensino fundamental incompleto</option>
            <option value="PfundamentalCom"> Ensino fundamental completo</option>
            <option value="PmedioInc"> Ensino médio incompleto</option>
            <option value="PmedioCom"> Ensino médio completo</option>
            <option value="Psuperior"> Superior completo (ou graduação)</option>
            <option value="PposGradu"> Pós-graduação</option>
            <option value="Pmestre"> Mestrado</option>
            <option value="Pdoutorado"> Doutorado</option>
            <option value="PposDoutorado"> Pós-Doutorado</option>
        </select>


    </div>
    <div className="footer">
        <Link to='#'><button className="voltar" >Voltar</button></Link>
        <Link to='#'><button >Continuar</button></Link>
    </div>
    </Container>
)
export default School;