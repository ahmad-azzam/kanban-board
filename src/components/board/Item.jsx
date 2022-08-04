import IconMenu from '../../assets/menu.png'

const Item = ({ data }) => {
    return (
        <>
            <div className="bg-[#FAFAFA] w-full max-h-max px-4 pt-4 py-5 flex flex-col rounded-md mb-3">
                <div className="text-sm font-bold mb-2">
                    {data?.name}
                </div>
                <hr className="border-dashed border mb-3" />
                <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                        <div className="w-40">
                            <div style={{ width: `${data.progress_percentage}%` }} className={`${data?.progress_percentage < 100 ? 'bg-primary' : 'bg-success'} rounded-md h-4`} />
                        </div>
                        <div className="text-sm">
                            {`${data?.progress_percentage}%`}
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <img src={IconMenu} className="w-6 h-6" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item