import { useEffect, useState } from "react"
import useClickOutside from "../hooks/useClickOutside"
import IconClose from "../../assets/close.png"
import IconExclamation from "../../assets/exclamation.png"
import Input from "../Input"
import ButtonPrimary from "../button/Primary"
import ButtonWhite from "../button/White"
import ButtonDanger from "../button/Danger"

const Modal = ({ type, setShowModal, payloadTask }) => {
    const [formTask, setFormTask] = useState({
        name: "",
        progress_percentage: ""
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormTask(current => {
            return {
                ...current,
                [e.target.name]: e.target.value
            }
        })
    }

    const closeModal = () => {
        setShowModal(false)
        setFormTask({
            name: "",
            progress_percentage: ""
        })
    }

    const domNode = useClickOutside(() => {
        if (!loading) setShowModal(false)
    })

    console.log(formTask, '<< form tast')

    useEffect(() => {
        if (payloadTask?.name || payloadTask?.progress_percentage) {
            setFormTask(payloadTask)
        }
    }, [payloadTask?.name, payloadTask?.progress_percentage])

    return (
        <>
            <div className="justify-center px-5  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-[420px] max-h-[90%] my-6 mx-auto bg-white rounded-lg z-[60]">
                    {
                        type === 'task-management' ? (
                            <>
                                <div className="px-6 py-7">
                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="text-lg font-bold">
                                                {payloadTask?.name || payloadTask?.progress_percentage ? 'Edit Task' : 'Create Task'}
                                            </div>
                                            <div className="w-6 h-6 cursor-pointer" onClick={closeModal}>
                                                <img src={IconClose} className="w-full h-full" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-2 mb-4">
                                            <label className="text-xs font-bold">Task Name</label>
                                            <Input type={'text'} value={formTask?.name} name="name" placeholder="Type your Task" onChange={handleChange} />
                                        </div>
                                        <div className="flex flex-col space-y-2 mb-4">
                                            <label className="text-xs font-bold">Progress</label>
                                            <Input type={'text'} name="progress_percentage" placeholder="Type your Progress" onChange={handleChange} />
                                        </div>
                                        <div className="ml-auto flex space-x-3">
                                            <div className="min-w-max">
                                                <ButtonWhite title="Cancel" onClick={closeModal} />
                                            </div>
                                            <div className="min-w-max">
                                                <ButtonPrimary title="Save Task" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : type === 'task-delete' ? (
                            <div className="px-6 py-7">
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex space-x-3 items-center">
                                            <div className="w-6 h-6 cursor-pointer">
                                                <img src={IconExclamation} className="w-full h-full" alt="" />
                                            </div>
                                            <div className="text-lg font-bold">
                                                Delete Task
                                            </div>
                                        </div>
                                        <div className="w-6 h-6 cursor-pointer" onClick={closeModal}>
                                            <img src={IconClose} className="w-full h-full" alt="" />
                                        </div>
                                    </div>
                                    <div className="text-sm mb-5">
                                        Are you sure want to delete this task? your action can’t be reverted.
                                    </div>
                                    <div className="ml-auto flex space-x-3">
                                        <div className="min-w-max">
                                            <ButtonWhite title="Cancel" onClick={closeModal} />
                                        </div>
                                        <div className="min-w-max">
                                            <ButtonDanger title={'Delete'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                            </>
                        )
                    }
                </div>
                <div className='opacity-50 fixed inset-0  bg-black' ref={domNode} />
            </div>
        </>
    )
}

export default Modal