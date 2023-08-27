import React from "react";
import Music from "./BackgroundMusic";
// import Coding from '../coding_w_selfie.svg'

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
                
                {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={Coding}
                    />
                </div> */}
                <div className="mr-auto items-center justify-center">
                    <p htmlFor="name" className="leading-7 text-sm text-violet-300">
                        Listen to music while you scroll!
                    </p>
                    <Music />
                </div>
            </div>
        </section>
    );
}


export default About

//https://forms.un-static.com/forms/0b8da28a608548519d41bf5824b074e432957481