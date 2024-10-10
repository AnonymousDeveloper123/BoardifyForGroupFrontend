import { useState } from "react"
import { BoardAction, ModalPage, ProjectCard } from "../components"

const BoardDesk = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => {
    setIsOpenModal(true);
  }
  return (
    <section className="board-desk w-full py-2 px-2 flex flex-col gap-3 h-[100vh] bg-board-bg">
      <div className="flex justify-between flex-row">
        <BoardAction />
        <BoardAction isProgress={true} />
        <BoardAction isComplete={true} />
      </div>
      <div className="card-list flex flex-row flex-wrap justify-between">
        <ProjectCard onClick={onOpenModal} title={"Lorem ipsum dolor sit amet"} listOfTasks={["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]} />
        <ProjectCard onClick={onOpenModal} level="medium" title={"Lorem ipsum dolor sit amet"} listOfTasks={["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]} />
        <ProjectCard onClick={onOpenModal} level="medium" title={"Lorem ipsum dolor sit amet"} listOfTasks={["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]} />
        <ProjectCard onClick={onOpenModal} level={"low"} title={"Lorem ipsum dolor sit amet"} listOfTasks={["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]} />
        <ProjectCard onClick={onOpenModal} level={"low"} title={"Lorem ipsum dolor sit amet"} listOfTasks={["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]} />
        <ProjectCard onClick={onOpenModal} level={"low"} title={"Lorem ipsum dolor sit amet"} listOfTasks={["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]} />
      </div>
      <ModalPage isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
      </ModalPage>
    </section>
  )
}

export default BoardDesk