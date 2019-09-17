import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap');

/* 
  green: 1dde74
  red: de1d50
*/

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #edf7ff;
    -webkit-font-smoothing: antialised;
    width: 100%;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
  }


  button {
    /* tamanho */
    width: 25rem;
    height: 4rem;
    padding: 1rem;
    @media(max-width: 480px){
      width: 15rem;
      font-size: 1rem;
    }
    /* estilo */
    background-color: #1dde74;
    color: #eee;
    border-radius: 3rem;
    border: none;
    font-size: 1.5rem;
    box-shadow: 0 .1rem .1rem rgba(0,0,0,.3);
    /* comportamento */
    cursor: pointer;
  }
  .header {
    margin-top: 2rem;
    margin-left: 2rem;
    @media (max-width: 480px) {
      text-align: center;
      font-size: .8rem;
      margin: 1.5rem 0 0 0;
    }

  }
  .footer{
        margin-top: 10rem;
        width: 100%;
        position: fixed;
        bottom: 10%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        @media(max-width: 480px){
          position: relative;
          bottom: 0;
        }
    }
    .voltar {
        background-color: #de1d50;
    }
    a {
        margin: 1rem;
    }
`;