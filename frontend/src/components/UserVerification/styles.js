import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    /* margin-left: 25px; */
    /* justify-content: center; */
`;

export const Header = styled.div`
    /* flex-direction: column;
    /* padding: 40px; */
    /*height: 120px; */
    margin-left: 25px;

`;

export const Panel = styled.div`
    text-align: center;
    margin-top: 20%;
    label {
        font-size: 3em;
        color: #fff;
    }

    input {
        /* margin-top: 104px;
        margin-left: 30px;
        */
        margin: .5rem auto;
        /* margin-left: auto;
        margin-right: auto; */
        width: 100%;
        max-width: 600px;
        height: 3rem;
        padding: 1rem;
    }

`;

export const Verification = styled.form`

    div {
        display: flex;
        flex-direction: column;
        label {
            font-size: 2rem;
        }
    }

    button {
        @media screen and (max-width: 480px) {
            position: static;
        }
    }
    
   

`;