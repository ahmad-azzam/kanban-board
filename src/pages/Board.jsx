import { useEffect, useState } from "react"
import KanbanBoard from "../components/board/KanbanBoard"
import { getTodos } from "../service"
import IconPlusWhite from '../assets/plus-white.png'
import Modal from "../components/modal"

const Board = () => {
    const [boards, setBoards] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [reload, setReload] = useState(false)

    const getBoards = async () => {
        try {
            const { data } = await getTodos()
            console.log(data, '<<< data')
            setBoards(data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBoards()
    }, [])

    useEffect(() => {
        console.log(reload, 'board reload')
        if (reload) getBoards()
    }, [reload])


    return (
        <>
            <div className="flex space-x-3 items-center">
                <div className="text-lg font-bold px-5 py-4">
                    Product Roadmap
                </div>
                <div onClick={() => setShowModal(!showModal)} className="w-max h-7 px-4 py-2 bg-primary flex justify-center items-center rounded-lg cursor-pointer">
                    <div className="mr-2">
                        <img src={IconPlusWhite} className="w-4 h-4" alt="" />
                    </div>
                    <div className="text-white text-xs font-bold">
                        Add New Group
                    </div>
                </div>
            </div>
            <hr className="w-full" />
            <div className="px-5">
                <div className="flex space-x-4 w-full overflow-x-auto mt-5 pb-5">
                    {
                        boards.map((el, idx) => {
                            const firstData = idx === 0 ? true : false
                            const lastData = idx === boards.length - 1 ? true : false
                            const rightId = boards[idx + 1]
                            const leftId = boards[idx - 1]
                            return <KanbanBoard key={`${el.id}-kanbanBoard`} todo={el} firstData={firstData} lastData={lastData} rightId={rightId} leftId={leftId} reloadBoard={reload} setReloadBoard={setReload} />
                        })
                    }
                </div>
            </div>

            {showModal && <Modal setShowModal={setShowModal} setReload={setReload} />}
        </>
    )
}

export default Board