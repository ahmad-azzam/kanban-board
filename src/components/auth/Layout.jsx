const LayoutAuth = ({ children, title }) => {
    return (
        <>
            <div className="h-[70vh] w-10/12 md:w-6/12 flex flex-col items-center justify-center space-y-6 border rounded-xl shadow-lg px-10 md:px-20">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <div className="flex flex-col space-y-3 w-full">
                    {children}
                </div>
            </div>
        </>
    )
}

export default LayoutAuth