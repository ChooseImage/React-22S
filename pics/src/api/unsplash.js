import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com", 
    headers: {
        Authorization: 'Client-ID vXOsmgCfoJr8CVX6ha1qrnlcLi8AHc2FSdhSr1kI8-c' 
    }
});