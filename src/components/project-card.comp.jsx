/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// import React from 'react'

// eslint-disable-next-line react/prop-types
import { BiCalendar, BiDotsHorizontalRounded, BiEdit, BiShow, BiTrash } from "react-icons/bi";
import Progress from "./progress.com";
import { Dropdown } from "flowbite-react";
export const ProjectCard = ({ level, title, listOfTasks,onClick }) => {
    return (
        <div className="project-card cursor-pointer px-[20px] mt-[15px] py-[15px] w-[calc(100%/3-5px)] bg-white h-[auto] flex rounded-3xl flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
                <span ariaType="level" className={level && typeof level === 'string' ?
                    (level.toLowerCase() === "high" ? "bg-pink-400 text-pink-500" :
                        level.toLowerCase() === "medium" ? "bg-yellow-400 text-yellow-500" :
                            "bg-green-400 text-green-500") : "bg-gray-400 text-gray-500"}>
                    {typeof level === 'string' && level.toLocaleUpperCase() || "No level"}
                </span>
                <button className="rounded-md transition-all focus:ring-4 focus:ring-cyan-300">
                    <Dropdown style={{ backgroundColor: "transparent", border: "none", width: "fit-content" }}
                        arrowIcon={false}
                        arrow={false}
                        label={<>
                            <BiDotsHorizontalRounded className="text-gray-500 cursor-pointer"
                                fontSize={30} />
                        </>}
                    >
                        <Dropdown.Item className="justify-center"><BiEdit  fontSize={20}/></Dropdown.Item>
                        <Dropdown.Item className="justify-center"><BiTrash  fontSize={20}/></Dropdown.Item>
                        <Dropdown.Item className="justify-center" onClick={onClick}><BiShow fontSize={20}/></Dropdown.Item>
                    </Dropdown>
                </button>
            </div>
            <div className="flex" >
                <span className="font-bold ">{title}</span>
            </div>
            <div className="flex flex-row">
                <span className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, eligendi.
                </span>
            </div>
            <div className="flex italic text-[12px] flex-row items-center">
                <BiCalendar fontSize={16} />
                <span >Today at 12:00</span>
            </div>
            <div className="block">
                <ul className="flex flex-col gap-2">
                    {
                        listOfTasks && listOfTasks.map((task, index) => {
                            return (
                                <li key={index}>
                                    <input id={"inline-checkbox" + index} type="checkbox" value="" className="w-4 h-4 text-todo bg-gray-100 border-gray-300 rounded focus:ring-todo focus:ring-2" />
                                    <label htmlFor={"inline-checkbox" + index} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, optio?</label>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
            <div className="flex">
                <Progress />
            </div>
        </div>
    );
};

export default ProjectCard;
