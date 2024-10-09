import { BiSearch } from "react-icons/bi"
import { Button,DropdownComponent,Input } from "../components"
// import { Dropdown } from "flowbite-react"
const ComponentList = () => {
  return (
    <div className="flex flex-row gap-10 items-center">
        <Button />
        <Input rightIcon={true} Icon={BiSearch} leftIcon={true} icon={"K"}/>
        <DropdownComponent/>
    </div>
  )
}

export default ComponentList