import axios from "axios";

const baseURL = 'https://todos-project-api.herokuapp.com/'

export const api = axios.create({ baseURL })