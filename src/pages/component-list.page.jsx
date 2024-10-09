import { BiSearch } from "react-icons/bi"
import { Button, DropdownComponent, Input } from "../components"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { useState } from "react"
// import { Dropdown } from "flowbite-react"
const ComponentList = () => {
  const [visiblePass, setVisiblePass] = useState(false);
  const onVisiblePass = () => {
    setVisiblePass(!visiblePass)
  }
  return (
    <div className="flex flex-row gap-10 items-center">
      <Button />
      <Input rightIcon={false} placeholder={"Input..."} Icon={BiSearch} leftIcon={true} icon={"K"} />
      <Input rightIcon={true} 
      RightIconClick={onVisiblePass} 
      Icon={visiblePass ? BsEye : BsEyeSlash} 
      placeholder={"Pass..."} 
      type={visiblePass ? "password" : "text"} 
      leftIcon={false} />
      <DropdownComponent items={[
        { "name": "English" },
        { "name": "Uzbek" }
      ]} />
    </div>
  )
}

export default ComponentList