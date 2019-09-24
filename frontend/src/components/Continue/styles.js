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
    h2{
        margin-bottom: 1rem;
        color: #1dde74;
    }
    p {
        margin-top: 3%;
    }
    .main {
        color: #1dde74;
        font-size: 1.5rem;
        text-align: center;
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

`;