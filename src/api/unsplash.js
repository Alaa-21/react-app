import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID EOixQGqiXqU9Oc15YZZ0HRNWxBIV7Vlc0Kh6nfie3Vo'
    }
});