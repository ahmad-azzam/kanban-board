import { useCallback, useState } from "react"
import ButtonPrimary from "../button/Primary"
import Input from "../Input"
import LayoutAuth from "./Layout"

const Register = ({ setMode }) => {
    const [formRegister, setFormRegister] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setFormRegister(current => {
            return {
                ...current,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleRegister = useCallback(async () => {
        try {
            console.log('masuk register')
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <>
            <LayoutAuth title="Register">
                <div className="w-full">
                    <Input placeholder="Input your name" name='name' type="text" onChange={handleChange} />
                </div>
                <div className="w-full">
                    <Input placeholder="Input your email" name='email' type="text" onChange={handleChange} />
                </div>
                <div className="w-full">
                    <Input placeholder="Input your password" name='password' type="password" onChange={handleChange} />
                </div>
                <div className="w-full">
                    <Input placeholder="Input your password again" name='confirmPassword' type="password" onChange={handleChange} />
                </div>
                <ButtonPrimary title={'Register'} onClick={handleRegister} />
                <span className="text-sm">
                    Have acount ? <span className="cursor-pointer text-teal-500" onClick={() => setMode('login')}>Login here</span>
                </span>
            </LayoutAuth>
        </>
    )
}

export default Register