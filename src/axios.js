import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://randeu-backend.herokuapp.com/'
});

export default instance;