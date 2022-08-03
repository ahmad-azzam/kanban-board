import { useCallback, useState } from "react"
import ButtonPrimary from "../button/Primary"
import Input from "../Input"
import LayoutAuth from "./Layout"

const Login = ({ setMode }) => {
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

    const handleLogin = useCallback(async () => {
        try {
            console.log('masuk login')
        } catch (err) {
            console.log(err)
        }
    }, [])

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