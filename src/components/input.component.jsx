// eslint-disable-next-line react/prop-types
const Input = ({ Icon,leftIcon,rightIcon, ...props }) => {
    return (
      <div className="flex flex-row w-[250px] px-2 py-1 gap-2 items-center bg-white rounded-xl">
        <div className={`w-5 flex items-center justify-center text-primary cursor-pointer border-e-2 px-3 py-1 h-full ${leftIcon ? 'block' : 'hidden'}`}>
        {Icon && leftIcon && <span>{<Icon />}</span>} 
        </div>
        <input 
          {...props} 
          placeholder="Input..." 
          className="px-3 py-2 bg-transparent text-primary rounded-xl w-full outline-none border-none"
        />
        <div className={`w-5 flex items-center justify-center text-primary cursor-pointer border-s-2 px-3 py-1 h-full ${rightIcon ? 'block' : 'hidden'}`}>
        {Icon && rightIcon && <span>{<Icon/>}</span>} 
        </div>
      </div>
    );
  };
  
  export default Input;
  