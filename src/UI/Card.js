import React from "react";
import Omori from './../assets/omori-omori-Cover-Art.png'
import AudioTest from "../components/BackgroundAudio";

const Card = () => {
    return (
        <div class="max-w-max w-full lg:max-w-full lg:flex">
            <div
                className="border-r border-b border-l border-violet-400 rounded-l-lg lg:border-t lg:border-violet-400 rounded-b-lg lg:rounded-r-lg p-4 flex flex-col justify-between leading-normal">
                <div className="text-violet-300 font-bold mb-1 text-center">
                    <p className="font-bold text-sm">✨Listen to music while you scroll!✨</p>
                </div>
                <div>
                    <p className="text-xs italic text-center mt-0">
                        <a href="https://open.spotify.com/playlist/46KaowzEEfEz6XBfqu86SG?si=8f3ba38fe7fc4276" target="_blank" rel="noreferrer">
                            (Full Playlist Here)
                        </a>
                    </p>
                </div>
                <div className="mb-8">
                    <div className="mt-4 text-violet-300 text-sm items-center">
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