import { useCallback, useState } from "react"
import { apiLogin } from "../../apis"
import ButtonPrimary from "../button/Primary"
import Input from "../Input"
import LayoutAuth from "./Layout"
import { useNavigate } from "react-router-dom"

const Login = ({ setMode }) => {
    const navigate = useNavigate()
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormLogin(current => {
            return {
                ...current,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleLogin = async () => {
        try {
            const { data } = await apiLogin({
                method: 'POST',
                url: 'auth/login',
                data: formLogin
            })
            console.log(data)
            localStorage.setItem('token', data.auth_token)
            setFormLogin({
                email: "",
                password: ""
            })
            navigate('/v1/board')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <LayoutAuth title="Login">
                <div className="w-full">
                    <Input placeholder="Input your email" name='email' type="text" onChange={handleChange} />
                </div>
                <div className="w-full">
                    <Input placeholder="Input your password" name='password' type="password" onChange={handleChange} />
                </div>
                <ButtonPrimary title={'Login'} onClick={handleLogin} />
                <span className="text-sm">
                    Dont have acount yet? <span className="cursor-pointer text-teal-500" onClick={() => setMode('register')}>Register here</span>
                </span>
            </LayoutAuth>
        </>
    )
}

export default Login