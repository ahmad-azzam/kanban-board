export const checkLogin = () => {
    if (localStorage.getItem('token')) return true
    else return false
} 