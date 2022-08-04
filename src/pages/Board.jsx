import { useEffect, useState } from "react"
import { api } from "../apis"
import KanbanBoard from "../components/board/KanbanBoard"

const Board = () => {
    const [boards, setBoards] = useState([])

    const getBoards = async () => {
        try {
            const { data } = await api({
                method: "GET",
                url: 'todos'
            })
            setBoards(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBoards()
    }, [])

    return (
        <>
            <div className="text-lg font-bold px-5 py-4">
                Product Roadmap
            </div>
            <hr className="w-full" />
            <div className="px-5">
                <div className="flex space-x-4 w-full overflow-x-auto mt-5 pb-5">
                    {
                        boards.map((el, idx) => {
                            const firstData = idx === 0 ? true : false
                            const lastData = idx === boards.length - 1 ? true : false
                            return <KanbanBoard key={`${el.id}-kanbanBoard`} todo={el} firstData={firstData} lastData={lastData} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Board