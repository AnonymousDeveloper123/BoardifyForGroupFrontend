import {FaUserGroup} from 'react-icons/fa6'
import { BsBuilding } from "react-icons/bs"
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
export const MainMenu = ()=>{
    return (
        <div className="main-menu w-1/4 px-[10px] border-e-2 flex flex-col gap-[16px]">
            <div className="logo h-[72px] flex items-center border-b-[2px] text-start px-[10px] py-[19px] w-full text-primary font-bold text-[28px]">
                BOARDIFY
            </div>
            <div className="menu">
                <ul className="flex flex-col gap-[16px]">
                    <li className="active">
                        <BsBuilding />
                        <Link to="/">Projects</Link>
                    </li>
                    <li>
                        <FaUserGroup  />
                        <Link to="/employers">Employers</Link>
                    </li>
                    <li>
                        <IoSettingsOutline/>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
