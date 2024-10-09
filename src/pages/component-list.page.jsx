import { BiSearch } from "react-icons/bi"
import { Button,Input } from "../components"
const ComponentList = () => {
  return (
    <div className="flex flex-row gap-10 items-center">
        <Button />
        <Input rightIcon={true} Icon={BiSearch} leftIcon={true} icon={"K"}/>
    </div>
  )
}

export default ComponentList