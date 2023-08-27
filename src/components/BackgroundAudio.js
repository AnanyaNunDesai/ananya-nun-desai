import React, { Component } from "react";

import song from './../assets/looped.mp3'

export class AudioTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            play: true
        };

        this.url = song;
        this.audio = new Audio(this.url);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        this.setState({
            play: !this.state.play
        });

        this.state.play ? this.audio.play() : this.audio.pause();
        this.audio.loop = true;
    }

    render() {
        return (
            <div className="border border-violet-950 rounded-lg bg-violet-900 text-center">
                {/* Show state of song on website */}
                <p className="bg-violet-950 border border-violet-950 rounded-t-lg">
                    {!this.state.play ?
                        "Now Playing: Omori OST" :
                        "Click to Play Music!"}
                </p>

                {/* Button to call our main function */}
                <button onClick={this.togglePlay} className="inline-flex text-violet-300 text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 hover:text-violet-100"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                    </svg>/
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 hover:text-violet-100"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                        />
                    </svg>
                </button>
            </div>
        );
    }

}

export default AudioTest;