import styled from 'styled-components';

export const Container = styled.div`
    .footer {
        margin-top: 3rem;
    }
    input{
        margin: 0 2rem;
        max-width: 25rem;
        width: 80%;
        font-size: 2rem;
    }
    .header {
        margin: 0 auto;
        max-width: 230px;   
        margin-top: 3%;    
    }
    img {
        width: 100%;
    }
    .main {
        margin: 0 5%;
        background-color: #fff;
        width: 90%;
        padding: 30px;
        float: left;
        height: 30rem;
        @media (max-width: 480px){
            height: 20rem;
        }
        position:relative;
    }
    .inputPhone {
        margin-top: 15%;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 480px) {
            margin-top: 3rem;
            flex-direction: column;
        }
        text-align: center;
        width: 100%;
    }
`;

export const Header = styled.div`
  

`;

export const Panel = styled.div`
    

`;