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
    h1 {
        margin-top: 1rem;
        color: #1dde74;
    }
    .hidden {
        visibility: hidden;
    }
    .main {
        text-align: center;
        margin: 0 5%;
        overflow-y: none;
        background-color: #fff;
        width: 90%;
        padding: 30px;
        float: left;
        height: 30rem;
        @media (max-width: 480px) {
            height: 20rem;
        }
        position: relative;
    }
    .choose {
        display: flex;
        width: 20%;
        margin: 5% auto;
    }
    .option {
        width: 250px;
    }

`;