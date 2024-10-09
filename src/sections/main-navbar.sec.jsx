import { Breadcrumb, DropdownComponent } from "../components";
import Flag from "react-world-flags";
import { BiBell, BiUser } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
export const MainNavbar = ({ breadcrumbPaths }) => {
    return (
        <div className="navbar w-full flex items-center h-[72px] bg-white">
            <nav className="flex border-b items-center s w-full px-5 py-3 text-gray-700" aria-label="Breadcrumb">
                <Breadcrumb paths={breadcrumbPaths} />
                <div className="ml-auto flex gap-2 items-center">
                    <DropdownComponent
                        defaultvalue={<span className="flex w-full justify-between flex-row gap-3"><Flag key="uzb" className={"w-[30px]"} code="uz" />Uzb</span>}
                        items={[
                            { name: <span className="flex w-full flex-row gap-3"><Flag key="uzb" className={"w-[30px]"} code="uz" />Uzb</span> },
                            { name: <span className="flex w-full flex-row gap-3"><Flag key="eng" className={"w-[30px]"} code="us" />Eng </span> }
                        ]}
                    />
                    <span>
                        <BiBell fontSize={20} />
                    </span>
                    <div className="profile flex items-center justify-center rounded-full border w-[50px] h-[50px]">
                        <BiUser fontSize={30} />
                    </div>
                </div>
            </nav>
        </div>
    );
};
