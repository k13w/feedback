import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import 'foundation-sites/dist/css/foundation.min.css';
import { Button, Colors } from 'react-foundation';
const Home = () => (
    <div class="grid-container ">
        <div class="grid-x grid-margin-x text-center hide-for-small-only">
            <div class="cell">
                <img class="homeImage" src="imgs/logo.png" />
            </div>
            <div class="cell">
                <h1>Reconexão e-Tec</h1>
            </div>
            <div class="cell">
                <h3>Bem vindo</h3>
            </div>
            <div class="cell">
                <Link to='/about'><button type="button" class="goButton" >Iniciar</button></Link>
            </div> 
        </div>
        <div class="grid-x grid-margin-x text-center show-for-small-only">
            <div class="cell">
                <img class="homeImageSmall" src="imgs/logo.png" />
            </div>
            <div class="cell">
                <h1>Reconexão e-Tec</h1>
            </div>
            <div class="cell">
                <h3>Bem vindo</h3>
            </div>
            <div class="cell">
                <Link to='/about'><button type="button" class="goButtonSmall" >Iniciar</button></Link>
            </div> 
        </div>
        
    </div>
     
   

    
)

export default Home;