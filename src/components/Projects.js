import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data"



const Projects = () => {
    return (
        <section id="projects" className="text-violet-300 bg-violet-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40 pt-20">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-violet-200">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-violet-300">
                        Here are some fun things I've tried out so far. I've learnt so much from each <br />
                        project I made, and I'd love if you checked them out!
                    </p>
                </div>
                <div className="flex flex-wrap items-center m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            target="_blank"
                            key={project.image}
                            rel="noreferrer"
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-auto w-full border-4 rounded-lg border-indigo-950 bg-violet-800 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-violet-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-violet-100 mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );

}

export default Projects