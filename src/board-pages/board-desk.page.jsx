import { BoardAction } from "../components"

const BoardDesk = () => {
  return (
    <section className="board-desk w-full py-2 px-2 h-[80vh] bg-board-bg">
      <div className="flex justify-between flex-row">
      <BoardAction/>
      <BoardAction isProgress={true}/>
      <BoardAction isComplete={true}/>
      </div>
    </section>
  )
}

export default BoardDesk