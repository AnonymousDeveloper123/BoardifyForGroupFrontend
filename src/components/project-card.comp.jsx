/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// import React from 'react'

// eslint-disable-next-line react/prop-types
import { BiCalendar, BiDotsHorizontalRounded } from "react-icons/bi";
export const ProjectCard = ({ level, title }) => {
    return (
        <div>
            <div className="project-card px-[20px] py-[15px] w-[calc(100%/3-5px)] bg-white h-[200px] flex rounded-3xl flex-col gap-2">
                <div className="flex flex-row justify-between items-center">
                    <span aria-type="level" className={level && typeof level === 'string' ?
                        (level.toLowerCase() === "high" ? "bg-pink-400 text-pink-500" :
                            level.toLowerCase() === "medium" ? "bg-yellow-400 text-yellow-500" :
                                "bg-green-400 text-green-500") : "bg-gray-400 text-gray-500"}>
                        {level || "No level"}
                    </span>
                    <button className="px-2 py-0.5 rounded-md transition-all focus:ring-4 focus:ring-cyan-300">
                        <BiDotsHorizontalRounded className="text-gray-500 cursor-pointer" fontSize={30} />
                    </button>
                </div>
                <div className="flex">
                    <span className="font-bold ">{title}</span>
                </div>
                <div className="flex flex-row">
                    <span className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, eligendi.
                    </span>
                </div>
                <div className="flex flex-row items-center">
                    <BiCalendar fontSize={20}/>
                    <span>Today at 12:00</span>
                </div>
                <div className="block">
                    <ul className="flex flex-col gap-2">
                        <li>
                            <input className="" type="checkbox" name="" id=""/>
                            <span>title</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
