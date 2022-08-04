import { useState } from "react"
import { api } from "../../apis"
import ButtonMenu from "../button/Menu"
import Modal from "../modal"



const Item = ({ data, firstData, lastData, idTodo, setReload, rightId, leftId }) => {
    const [showModal, setShowModal] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [payloadTask, setPayloadTask] = useState({})

    const handleClick = type => {
        if (type === 'edit') {
            setPayloadTask({
                name: data.name,
                progress_percentage: data.progress_percentage
            })
            setShowModal(true)
        } else if (type === 'delete') {
            setShowModalDelete(true)
        } else handleMove(type)
    }

    const handleMove = async type => {
        try {
            const target_todo_id = type === "move_right" ? rightId : leftId
            const url = `todos/${idTodo}/items/${data.id}`
            const method = 'PATCH'

            const { data: dataRes } = await api({
                method,
                url,
                data: {
                    target_todo_id
                }
            })
            console.log(dataRes)
            setReload(true)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="bg-[#FAFAFA] w-full max-h-max px-4 pt-4 py-5 flex flex-col rounded-md mb-3">
                <div className="text-sm font-bold mb-2">
                    {data?.name}
                </div>
                <hr className="border-dashed border mb-3" />
                <div className="flex justify-between items-center">
                    <div className="flex space-x-4 items-center">
                        <div className="w-40">
                            <div style={{ width: `${data?.progress_percentage}%` }} className={`${data?.progress_percentage < 100 ? 'bg-primary' : 'bg-success'} rounded-md h-4`} />
                        </div>
                        <div className="text-sm">
                            {`${data?.progress_percentage}%`}
                        </div>
                    </div>
                    <ButtonMenu onClick={handleClick} firstData={firstData} lastData={lastData} />
                </div>
            </div>

            {showModal && <Modal type={'task-management'} setShowModal={setShowModal} payloadTask={payloadTask} idItem={data.id} idTodo={idTodo} setReload={setReload} />}
            {showModalDelete && <Modal type={'task-delete'} setShowModal={setShowModalDelete} idItem={data.id} idTodo={idTodo} setReload={setReload} />}
        </>
    )
}

export default Item