import styled from 'styled-components';

export const Container = styled.div`
    .header {
        margin: 0 auto;
        max-width: 230px;   
        margin-top: 3%;    
    }
    img {
        width: 100%;
    }
    .main {
        text-align: center;
        font-size: 1.5rem;
        margin: 0 5%;
        background-color: #fff;
        width: 90%;
        padding: 10% 30px 30px 30px;
        float: left;
        height: 30rem;
        @media (max-width: 480px){
            height: 20rem;
        }
        position:relative;
    }
    .inputEmail {
        margin-top: 5%;
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
    input{
        @media (max-width: 480px){
            font-size: 1.3rem
        }
        margin: 0 2rem;
        max-width: 25rem;
        width: 80%;
        font-size: 2rem;
    }
`;