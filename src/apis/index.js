import axios from "axios";

const baseURL = 'https://todos-project-api.herokuapp.com/'

export const apiLogin = axios.create({ baseURL })
export const api = axios.create({
    baseURL,
    headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
    }
})