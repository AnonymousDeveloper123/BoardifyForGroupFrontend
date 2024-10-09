import { Dropdown } from "flowbite-react"
import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const DropdownComponent = ({items,defaultvalue,...props}) => {
    useEffect(()=>{
        // eslint-disable-next-line react/prop-types
        items.map((item)=>{
            console.log(item.name)
        })
    })
    const [choose,setChoose]=useState(defaultvalue ? defaultvalue : "...");
    const onChange = (item)=>[
        setChoose(item)
    ]
    return (
        <Dropdown style={{
             backgroundColor: "transparent",
             color: "#292D32",
             border: "none",
             width: "max-content",
        }} {...props} label={choose}>
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