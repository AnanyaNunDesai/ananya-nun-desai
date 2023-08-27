import React from "react";
// import styles from './Card.module.css'
import Omori from './../assets/omori-omori-Cover-Art.png'
import AudioTest from "../components/BackgroundAudio";

const Card = () => {
    return (
        <div class="max-w-max w-full lg:max-w-full lg:flex">
            {/* <div
                className="bg-none h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            // styles="background-image: url('./assets/omori-omori-Cover-Art.png')"
            // title="Woman holding a mug"
            >
                <img src={Omori} alt="omori"/> 
            </div> */}
            <div
                className="border-r border-b border-l border-violet-400 rounded-l-lg lg:border-t lg:border-violet-400 rounded-b-lg lg:rounded-r-lg p-4 flex flex-col justify-between leading-normal">
                <div className="text-violet-300 font-bold mb-1 text-center">
                    <p className="font-bold text-sm">✨Listen to music while you scroll!✨</p>
                </div>
                <div>
                    {/* <p clasNames="text-gray-700 text-base"></p> */}
                    <p className="text-xs italic text-center mt-0">
                        <a href="https://open.spotify.com/playlist/46KaowzEEfEz6XBfqu86SG?si=8f3ba38fe7fc4276" target="_blank" rel="noreferrer">
                            (Full Playlist Here)
                        </a>
                    </p>
                </div>
                <div className="mb-8">
                    <div className="mt-4 text-violet-300 text-sm items-center">
                        {/* <svg
                            className="fill-current text-gray-500 w-3 h-3 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg> */}
                        <AudioTest />
                    </div>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 mr-4"
                        src={Omori}
                        alt="omori" />
                    <div className="text-sm ">
                        <a
                            href="https://www.instagram.com/omocat/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-violet-300 font-bold leading-none hover:text-violet-200"
                        >
                            Creator: Omocat
                        </a>
                        <div>
                            <a href="#contact" className="text-violet-400 hover:text-violet-300">Album: Omori (2020)</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card

