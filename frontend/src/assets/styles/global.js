import { createGlobalStyle } from 'styled-components'
import background from '../img/background.svg'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #6A5ACD url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialised;
    /* min-width: 1100px; */
    width: 100%;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }
  input:focus {
  }
  
  button {
    cursor: pointer;
    max-width: 25rem;
    width: 100%;
    height: 5rem;
    position: fixed;
    bottom: 10%;
    right: 10%;
    background-color: #3f51b5;
    color: white;
    border-radius: 26px;
    border: none;
    font-size: 1.5rem;
    @media screen and (max-width: 480px) {
      font-size: 1rem;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 80%;
      margin: 10%;
    }
  }

`;