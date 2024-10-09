import { BiPlus, BiSearch } from "react-icons/bi";
import { Button, Input } from "../components";
import { MainMenu } from "../sections";
import { MainNavbar } from "../sections";
import { Route, Routes } from "react-router-dom";
import { BoardDesk, Employers } from "../board-pages";

const Projects = () => {
    const breadcrumbPaths = [
        { name: 'Projects', link: '/' },
        { name: 'NewCard', link: '/projects/newcard' },
        { name: 'eewgwgwgw324243', link: '' }, // Last part, not a link
    ];
    return (
        <section className="projects pe-2 flex gap-3 w-full">
            <MainMenu />
            <main className="board flex flex-col w-3/4 gap-2">
                <MainNavbar breadcrumbPaths={breadcrumbPaths} />
                <div className="flex justify-between">
                    <Input 
                        Icon={BiSearch} 
                        leftIcon={true} 
                        placeholder="Search" 
                        className="flex-1"
                    />
                    <Button 
                        btnText={
                            <span className="flex gap-2 items-center">
                                <BiPlus fontSize={20} /> New Task
                            </span>
                        } 
                    />
                </div>
                <Routes>
                    <Route path="/" element={<BoardDesk />} />
                    <Route path="/employers" element={<Employers />} />
                </Routes>
            </main>
        </section>
    );
};

export default Projects;
