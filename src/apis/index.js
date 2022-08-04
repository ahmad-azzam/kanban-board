import axios from "axios";

const baseURL = 'https://todos-project-api.herokuapp.com/'

export const apiLogin = axios.create({ baseURL })
export const api = axios.create({
    baseURL,
    headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NTk5NDUzNzl9.G4TOpuaESVOZG7psiEeiAthkTz4chOp8RWMBKXUXyZU`
    }
})