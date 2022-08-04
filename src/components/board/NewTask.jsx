import IconPlus from '../../assets/plus.png'

const NewTask = ({ onClick }) => {
    return (
        <>
            <div onClick={onClick} className="flex items-center cursor-pointer">
                <div className="mr-1">
                    <img src={IconPlus} className="w-5 h-5" alt="" />
                </div>
                <div className="text-xs">
                    New Task
                </div>
            </div>
        </>
    )
}

export default NewTask