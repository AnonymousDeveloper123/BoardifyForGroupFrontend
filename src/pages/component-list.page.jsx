import { Button,Input } from "../components"
const ComponentList = () => {
  return (
    <div className="flex flex-row gap-10 items-center">
        <Button />
        <Input rightIcon={true} leftIcon={true} icon={"K"}/>
    </div>
  )
}

export default ComponentList