import { BoardAction, ProjectCard } from "../components"

const BoardDesk = () => {
  return (
    <section className="board-desk w-full py-2 px-2 flex flex-col gap-3 h-[80vh] bg-board-bg">
      <div className="flex justify-between flex-row">
      <BoardAction/>
      <BoardAction isProgress={true}/>
      <BoardAction isComplete={true}/>
      </div>
      <div className="card-list">
        <ProjectCard title={"Lorem ipsum dolor sit amet"}/>
      </div>
    </section>
  )
}

export default BoardDesk