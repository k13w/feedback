import React from 'react';
import { getToken } from '../../services/auth';
import jwt from 'jwt-decode';

const Feed = () => {

    const token = getToken()
    const decoded = jwt(token)

    return(
        <h1>Seja bem vindo (a) {decoded.name}</h1>
    )
}

export default Feed;