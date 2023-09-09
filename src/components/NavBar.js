import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
// import AudioTest from "./BackgroundMusic";
// import Music from "./BackgroundMusic";


const NavBar = () => {
    return (
        <header className="bg-violet-950 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-2xl text-violet-200">
                        Ananya Desai
                    </a>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-violet-300	flex flex-wrap items-center text-violet-200 justify-center">
                    <a href="#projects" className="mr-5 hover:text-white">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#art" className="mr-5 hover:text-white">
                        My Art
                    </a>
                    {/* <a href="#testimonials" className="mr-5 hover:text-white">
                        Testimonials
                    </a> */}
                </nav>
                {/* <div className="mr-auto items-center justify-center">
                    {/* <p htmlFor="name" className="leading-7 text-sm text-violet-300">
                        Listen to music while you scroll!
                    </p> 
                    <p htmlFor="name" className="leading-7 text-sm text-violet-300">
                        <div className="font-bold">Listen to music while you scroll!</div>
                        <div className="text-xs italic">(Scroll to bottom for full playlist)</div>
                    </p>
                    <AudioTest />
    </div> */}

                <a
                    href="#contact"
                    className="inline-flex items-center bg-violet-800 border-0 py-1 px-3 focus:outline-none hover:bg-violet-600 rounded text-violet-200 mt-4 md:mt-0">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
                {/* <div><br></br></div> */}
                {/* <Music/> */}

            </div>
        </header>
    );
}

export default NavBar



