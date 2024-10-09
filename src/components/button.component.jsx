/* eslint-disable react/prop-types */

const Button = ({ action = () => {}, btnText, btnClass, ...props }) => {
  return (
    <div>
        <button className={'px-3 py-2 text-[#ffff] outline-none border-none w-[auto] rounded-md bg-primary '+btnClass} onClick={action} {...props}>{btnText ? btnText : 'Button'}</button>
    </div>
  );
};
export default Button;
