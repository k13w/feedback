import styled from 'styled-components';

export const Container = styled.div`
    margin: 20% auto 0 auto;
    display: flex;
    justify-content: center;

    div {
        width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        /* margin-top: 350px; */
        font-size: 2rem;
        color: #ddd;
    }
    h3 {
        text-align: center;
        margin-top: 10px;
        color: #CCCCCC;
    }

    h1,h3{
        @media screen and (max-width: 1366px) {
            color: #000;
        }
    }
    button {
        /*background-color: #3f51b5;
        bottom: 0;
        right: 0;
        position: relative;
        margin-top: 20px;
        color: #E6E6FA;
        border-radius: 26px;
        border: none;
        font-size: 2em;
    } */
    button:hover {
        opacity: 0.8;
        color: white;
    }


`;