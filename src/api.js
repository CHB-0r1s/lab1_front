import axios from 'axios';

const API_URL = 'http://localhost:8080/'; // Замените на ваш API

export const fetchHoney = async () => {
    const response = await axios.get(API_URL + 'product');
    console.log(response.data)
    return response.data;
};

export const addHoney = async (honey) => {
    console.log(honey)
    const response = await axios.post(API_URL + 'product_item', honey);
    console.log(response.data)
    return response.data;
};

export const fetchOrgs = async () => {
    const response = await axios.get(API_URL + 'organizations');
    console.log(response.data)
    return response.data;
};