import { useState } from "react"
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"

const Auth = () => {
    const [mode, setMode] = useState("login")

    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                {
                    mode === 'login' ? <Login setMode={setMode} /> : <Register setMode={setMode} />
                }
            </div>
        </>
    )
}

export default Auth