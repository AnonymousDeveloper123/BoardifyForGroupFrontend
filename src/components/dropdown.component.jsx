import { Dropdown } from "flowbite-react"
import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const DropdownComponent = ({items}) => {
    useEffect(()=>{
        // eslint-disable-next-line react/prop-types
        items.map((item)=>{
            console.log(item.name)
        })
    })
    const [choose,setChoose]=useState("tanlov");
    const onChange = (item)=>[
        setChoose(item)
    ]
    return (
        <Dropdown label={choose}>
            {
                // eslint-disable-next-line react/prop-types
                items.map((item,i)=>{
                    // eslint-disable-next-line react/jsx-key
                    return (<Dropdown.Item key={i} onClick={()=>onChange(item.name)}>{item.name}</Dropdown.Item>)
                })
            }   
        </Dropdown>
    )
}

export default DropdownComponent