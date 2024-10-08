// eslint-disable-next-line react/prop-types
const Input = ({ Icon, leftIcon, rightIcon, RightIconClick, LeftIconClick, ...props }) => {
  return (
    <div className="flex flex-row w-[250px] border px-2 items-center bg-white rounded-xl">
      <div onClick={LeftIconClick} className={`w-5 flex items-center justify-center text-primary cursor-pointer px-4 py-1 h-full ${leftIcon ? 'block' : 'hidden'}`}>
        {Icon && leftIcon && <span>{<Icon fontSize={20} />}</span>}
      </div>
      <input
        {...props}
        className="px-3 py-2 bg-transparent ring-0 ring-offset-0 border-0 text-primary rounded-xl w-full outline-none"
      />
      <div onClick={RightIconClick} className={`w-5 flex items-center justify-center text-primary cursor-pointer border-s-2 px-4 py-1 h-full ${rightIcon ? 'block' : 'hidden'}`}>
        {Icon && rightIcon && <span>{<Icon />}</span>}
      </div>
    </div>
  );
};

export default Input;
