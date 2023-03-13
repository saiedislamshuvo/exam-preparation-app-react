import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://192.168.68.100:8000/api',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache"
    }
});

export default Api;