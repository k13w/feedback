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
   
    select {
        max-width: 25rem;
        width: 100%;
        height: 2rem;
        margin-bottom: 30px;
        margin-top: 5%;
        
    }
    h2{
        color: #1dde74;
        @media (max-width: 480px){
            font-size: 1.2rem;
        }
    }
    
    .main {
        text-align: center;
        font-size: 1.5rem;
        margin: 0 5%;
        background-color: #fff;
        width: 90%;
        padding: 30px 30px 30px 30px;
        float: left;
        height: 30rem;
        @media (max-width: 480px){
            height: 20rem;
        }
        position:relative;
    }

`;