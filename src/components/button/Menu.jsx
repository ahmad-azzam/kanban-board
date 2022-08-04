import IconMenu from '../../assets/menu.png'
import ArrowLeft from '../icons/ArrowLeft'
import ArrowRight from '../icons/ArrowRight'
import Edit from '../icons/Edit'
import Trash from '../icons/Trash'

const ButtonMenu = ({ onClick }) => {
    return (
        <>
            <div className="relative dropdown">
                <button className="z-20">
                    <img src={IconMenu} className="w-6 h-6" alt="" />
                </button>
                <div className="opacity-0 z-30 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none pl-6 py-5">
                        <div className="w-full flex flex-col space-y-3">
                            <div className="flex space-x-3 items-center cursor-pointer" onClick={() => onClick('move__right')}>
                                <ArrowRight className="fill-neutral-500" />
                                <div className="text-sm font-semibold">
                                    Move Right
                                </div>
                            </div>
                            <div className="flex space-x-3 items-center cursor-pointer" onClick={() => onClick('move__left')}>
                                <ArrowLeft className="fill-neutral-500" />
                                <div className="text-sm font-semibold">
                                    Move Left
                                </div>
                            </div>
                            <div className="flex space-x-3 items-center cursor-pointer" onClick={() => onClick('edit')}>
                                <Edit className="fill-neutral-500" />
                                <div className="text-sm font-semibold">
                                    Edit
                                </div>
                            </div>
                            <div className="flex space-x-3 items-center cursor-pointer" onClick={() => onClick('delete')}>
                                <Trash className="fill-neutral-500" />
                                <div className="text-sm font-semibold">
                                    Delete
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ButtonMenu