const ButtonDanger = ({ onClick, title }) => {
    return (
        <>
            <button onClick={onClick} className="w-full h-10 bg-danger text-white font-bold rounded-xl px-3 border">
                {title}
            </button>
        </>
    )
}

export default ButtonDanger