import React from "react";
import Coding from './../assets/coding_w_selfie.png'
import Card from "../UI/Card";

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-violet-200">
                        Hi there, I'm Ananya!
                        <br className="hidden lg:inline-block" />I love art, games and building fun apps.
                    </h1>
                    <p className="mb-8 leading-relaxed text-violet-300">
                        When art meets engineering, beautiful things happen. And I'm here to bring that to life. So here's my journey so far! Wanna look around?
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-violet-100 bg-violet-600 border-0 py-2 px-6 focus:outline-none hover:bg-violet-800 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-violet-100 bg-violet-950 border-0 py-2 px-6 focus:outline-none hover:bg-violet-800 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="container px-5 md-0 flex sm:flex-nowrap flex-wrap items-end justify-end">
                    <div className="object-cover object-center rounded lg:w-2/3 md:w-1/2 bg-violet-950 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-end relative">
                        <img
                            width="100%"
                            height="100%"
                            title="img"
                            className="absolute inset-0"
                            style={{ filter: "opacity(0.7)" }}
                            alt="img"
                            src={Coding}
                        />
                        <div>
                            <div className="bg-violet-600 relative rounded shadow-md bg-opacity-80">
                                <div className="md:text-left text-sm text-violet-300 ">
                                    <Card className="card" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default About

//https://forms.un-static.com/forms/0b8da28a608548519d41bf5824b074e432957481