import { useEffect, useState } from 'react'
import { api } from '../../apis'
import Item from './Item'
import NewTask from './NewTask'


const KanbanBoard = ({ todo, firstData, lastData }) => {
    const [items, setItems] = useState([])

    const getItems = async () => {
        try {
            const { data } = await api({
                method: "GET",
                url: `todos/${todo.id}/items`
            })
            console.log(data)
            setItems(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (todo?.id) getItems()
    }, [todo?.id])

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
                        return <Item key={`${el.id}-item`} data={el} />
                    })
                }
                <NewTask />
            </div>
        </>
    )
}

export default KanbanBoard