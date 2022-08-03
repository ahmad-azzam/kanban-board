const Input = ({ name, type, onChange, placeholder }) => {
    return (
        <>
            <input name={name} placeholder={placeholder} onChange={onChange} type={type} className="w-full pl-4 py-2 border rounded-xl focus:outline-none" />
        </>
    )
}

export default Input