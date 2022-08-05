import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { checkLogin } from "../helpers/checkLogin"

const ProtectedRoute = () => {
    const [auth, setAuth] = useState('')

    useEffect(() => {
        if (checkLogin()) setAuth('authenicated')
        else setAuth('not authenicated')
    }, [auth])

    if (auth === 'authenicated') {
        return <Outlet />
    } else if (auth === 'not authenicated') {
        return <Navigate to="/v1/auth" replace />
    }
}

export default ProtectedRoute