// import React, { useEffect, useRef, useState } from "react";
// import React from "react"

// const Music = () => {
//   // const url = "./BarbieGirl.mp3";
//   const songs = ["./006 - Let_s Get Together Now!.mp4",
//     "./003 - Lost At A Sleepover.mp4",
//     "./004 - Spaces In-Between.mp4"
//   ];

//   // const songs = ['./BarbieGirl.mp3']

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audioTrack, _setAudioTrack] = useState(new Audio(songs[0]));
//   const [songIdx, _setSongIdx] = useState(0);

//   const songIdxRef = useRef(songIdx);
//   const audioTrackRef = useRef(audioTrack);

//   const handleSongEnd = () => {
//     // Get the current song in our song array
//     const idx = songIdxRef.current;

//     let nextSong;

//     if (idx < songs.length - 1) {
//       nextSong = idx + 1;
//     } else {
//       nextSong = 0; // Loop to the first song
//     }

//     setSongIdx(nextSong);
//     setAudioTrack(new Audio(songs[nextSong]));
//     audioTrackRef.current.play();
//   };

//   useEffect(() => {
//     audioTrack.addEventListener("ended", handleSongEnd);
//     return () => {
//       audioTrack.removeEventListener("ended", handleSongEnd);
//     };
//   });

//   function setSongIdx(idx) {
//     songIdxRef.current = idx;
//     _setSongIdx(idx);
//   }

//   function setAudioTrack(track) {
//     audioTrackRef.current = track;
//     _setAudioTrack(track);
//   }

//   function togglePlay() {
//     if (isPlaying) {
//       setIsPlaying(false);
//       audioTrackRef.current.pause();
//     } else {
//       setIsPlaying(true);
//       audioTrackRef.current.play();
//     }
//   }

// };

// export default Music;








// // // window.onunhandledrejection = function(event) {
// // //   console.log(`Reason: ${event.reason}`,
// // //     ` Return value: ${event.returnValue}`
// // //   );
// // // };


// // // let mouseDown = false;
// // // let sounds = {
// // //   a: "./006 - Let_s Get Together Now!.mp3",
// // //   b: "./003 - Lost At A Sleepover.mp3",
// // //   c: "./004 - Spaces In-Between.mp3",
// // //   // d: "https://freesound.org/data/previews/448/448600_9311684-lq.mp3",
// // // }

// // // // preload audio files
// // // let promises = [];
// // // Object.keys(sounds).forEach(s => {
// // //   promises.push(new Promise((resolve, reject) => {
// // //     let url = sounds[s];
// // //     sounds[s] = new Audio();
// // //     sounds[s].addEventListener('canplaythrough', resolve, false);
// // //     sounds[s].src = url;
// // //   }));
// // // });

// // // Promise.all(promises).then(() => {
// // //   // stats.innerText = `All audio files loaded!  Drag mouse over the keys 😋`;
// // //   // stats.style.color = 'green';
// // //   init();
// // // }).catch(e => {
// // //   console.log('error loading audio files: ', e);
// // //   stats.innerText = 'Error loading audio files, see console logs.'
// // // });


// // // function init() {
// // //   Object.keys(sounds).forEach(s => {
// // //     document.querySelectorAll(`.${s}`).forEach(k => {
// // //       k.addEventListener('mousedown', () => {
// // //         sounds[s].play();
// // //       });

// // //       k.addEventListener('mouseenter', () => {
// // //         if (mouseDown)
// // //           sounds[s].play();
// // //       });

// // //       k.addEventListener('mouseup', () => {
// // //         sounds[s].currentTime = 0;
// // //         sounds[s].pause();
// // //       });
// // //       k.addEventListener('mouseleave', () => {
// // //         sounds[s].currentTime = 0;
// // //         sounds[s].pause();
// // //       });
// // //     })
// // //   });

// // //   piano.addEventListener('mousedown', () => mouseDown = true);
// // //   piano.addEventListener('mouseup', () => mouseDown = false);
// // //   piano.addEventListener('mouseleave', () => mouseDown = false);

// // // }


// const Music = () => {
//   return (
//     <div className="gap-x-3">
//       {/* <iframe
//         // style="border-radius:12px"
//         src="https://open.spotify.com/embed/track/3vMyi4zZKU4z25OPAeK9rX?utm_source=generator"
//         width="250"
//         height="152"
//         title="spotify"
//         frameBorder="0"
//         allowfullscreen=""
//         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//         loading="lazy">
//       </iframe> */}
//       {/* <iframe
//         // style="border-radius:12px"
//         src="https://open.spotify.com/embed/track/54shhL9vif2iwUXg0lNpQX?utm_source=generator"
//         width="250"
//         height="152"
//         title="spotify"
//         frameBorder="0"
//         allowfullscreen=""
//         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//         loading="lazy">
//       </iframe> */}
//       <iframe 
//       className="border-radius:12px" 
//       src="https://open.spotify.com/embed/track/06r2yQOiQYB1Ra4KYEdskL?utm_source=generator" 
//       width="250" 
//       height="152" 
//       title="spotify"
//       frameBorder="0" 
//       allowfullscreen="" 
//       allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
//       loading="lazy"></iframe>
//     </div>
//   )
// }
// export default Music




import React, { Component } from "react";

// Import your audio file
// import song from "./static/a.mp3";
import song from './../assets/005 - By Your Side..mp3';

class AudioTest extends Component {
  // Create state
  state = {

    // Get audio file in a variable
    audio: new Audio(song),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {
    var isPlaying = this.state.isPlaying;

    // Get state of song

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {

      // Play the song if it is paused
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });

  }


  // buttonToggler = () => {

  //   // let isPlaying = this.state.isPlaying

  //   if (isPlaying) {
  //     return (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth={1.5}
  //         stroke="currentColor"
  //         className="w-6 h-6"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M15.75 5.25v13.5m-7.5-13.5v13.5"
  //         />
  //       </svg>
  //     );
  //   }
  //   else {
  //     return (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth={1.5}
  //         stroke="currentColor"
  //         className="w-6 h-6"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
  //         />
  //       </svg>
  //     )

  //   }
  // }

  render() {
    return (
      <div>
        {/* Show state of song on website */}
        <p className="text-violet-300">
          {this.state.isPlaying ?
            "Song is Playing" :
            "Song is Paused"}
        </p>

        {/* Button to call our main function */}
        <button onClick={this.playPause} className="flex-inline flex text-violet-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
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
            className="w-6 h-6"
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
