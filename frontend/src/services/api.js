import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.77.17.75:7000'
})

export default api;