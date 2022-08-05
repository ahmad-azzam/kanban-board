import { api } from "../apis"

export const getTodos = async () => {
    return await api({
        method: "GET",
        url: "todos",
        headers: {
            authorization: `bearer ${localStorage?.getItem('token')}`
        }
    })
}

export const createTodo = async ({ data }) => {
    return await api({
        method: 'POST',
        url: 'todos',
        data,
        headers: {
            authorization: `bearer ${localStorage?.getItem('token')}`
        }
    })
}

export const getAllItems = async ({ id }) => {
    return await api({
        method: 'GET',
        url: `todos/${id}/items`,
        headers: {
            authorization: `bearer ${localStorage?.getItem('token')}`
        }
    })
}

export const submitTask = async ({ method, url, data }) => {
    return await api({
        method,
        url,
        data,
        headers: {
            authorization: `bearer ${localStorage?.getItem('token')}`
        }
    })
}

export const moveService = async ({ method, url, data }) => {
    return await api({
        method,
        url,
        data,
        headers: {
            authorization: `bearer ${localStorage?.getItem('token')}`
        }
    })
}

export const deleteTask = async ({ idTodo, idItem }) => {
    return await api({
        method: "DELETE",
        url: `todos/${idTodo}/items/${idItem}`,
        headers: {
            authorization: `bearer ${localStorage?.getItem('token')}`
        }
    })
}

export const loginService = async ({ data }) => {
    return await api({
        method: "POST",
        url: 'auth/login',
        data
    })
}

export const registerService = async ({ data }) => {
    return await api({
        method: "POST",
        url: 'signup',
        data
    })
}