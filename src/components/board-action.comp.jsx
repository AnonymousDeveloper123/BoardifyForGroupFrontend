import React from 'react'

// eslint-disable-next-line react/prop-types
const BoardAction = ({ name, isComplete, isProgress }) => {
    return (
        <div className="flex flex-row w-[calc(100%/3-5px)] gap-5 rounded-2xl items-center h-[40px] bg-white">
            <p>{name}</p>
            <div className={'w-[10px] h-[10px] rounded-full'+(isComplete ? ' bg-green-500' : isProgress ? ' bg-pink-500' : ' bg-[#45F0FC]')}></div>
            <p>{isComplete ? 'Completed' : isProgress ? 'In Progress' : 'Todo'}</p>
        </div>
    )
}

export default BoardAction