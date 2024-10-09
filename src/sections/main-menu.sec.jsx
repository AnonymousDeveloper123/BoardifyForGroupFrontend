export const MainMenu = ()=>{
    return (
        <div className="main-menu w-1/4 px-[10px] flex flex-col gap-[16px]">
            <div className="logo h-[100px] flex items-center border-b-[2px] text-start px-[10px] py-[19px] w-full text-primary font-bold text-[28px]">
                BOARDIFY
            </div>
            <div className="menu">
                <ul className="flex flex-col gap-[16px]">
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                </ul>
            </div>
        </div>
    )
}
