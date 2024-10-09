/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const Button=({action=()=>{},btnText,btnClass,...props}) => {
  return (
    <div>
        <button className={'px-3 py-2 text-[#ffff] outline-none border-none w-[100px] rounded-md bg-primary '+btnClass} onClick={action} {...props}>{btnText ? btnText : 'Button'}</button>
    </div>
  )
}
export default Button