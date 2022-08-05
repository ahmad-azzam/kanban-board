import { useCallback, useEffect, useState } from 'react'
import { api } from '../../apis'
import { getTodos } from '../../service'
import Modal from '../modal'
import Item from './Item'
import NewTask from './NewTask'


const KanbanBoard = ({ todo, firstData, lastData, leftId, rightId }) => {
    const [items, setItems] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [reload, setReload] = useState(false)

    const handleModal = useCallback(() => {
        return setShowModal(true)
    }, [])

    const getItems = async () => {
        try {
            const { data } = await getItems({ id: todo.id })
            setItems(data)
            console.log(data)
        } catch (err) {
            console.log(err.response, 'error todos')
        } finally {
            setReload(false)
        }
    }

    useEffect(() => {
        if (todo?.id) getItems()
    }, [todo?.id, localStorage?.getItem('token')])

    useEffect(() => {
        if (reload) getItems()
    }, [reload])

    return (
        <>
            <div className="min-w-[320px] w-80 border rounded-xl h-fit py-5 pl-6 pr-3 flex flex-col">
                <div className="border px-3 py-2 text-xs max-w-max rounded-md mb-2">
                    {todo?.title}
                </div>
                <div className="text-xs font-bold mb-2">
                    {todo?.description}
                </div>
                {
                    items.map((el, idx) => {
                        return <Item key={`${el.id}-item`} data={el} firstData={firstData} lastData={lastData} idTodo={todo.id} setReload={setReload} />
                    })
                }
                <NewTask onClick={handleModal} />
            </div>

            {showModal && <Modal type={'task-management'} setShowModal={setShowModal} idTodo={todo.id} setReload={setReload} />}
        </>
    )
}

export default KanbanBoard