const ButtonPrimary = ({ title, onClick }) => {
    return (
        <>
            <button onClick={onClick} className="w-full h-10 bg-primary text-white rounded-xl">
                {title}
            </button>
        </>
    )
}

export default ButtonPrimary