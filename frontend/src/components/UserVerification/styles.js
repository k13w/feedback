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
`;

export const Header = styled.div`

`;

export const Panel = styled.div`
    

`;

export const Verification = styled.form`
    .inputCpf {
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