import React from "react"
import emailjs from "emailjs-com"
import Villain from './../assets/19th_century_villain.png'
import Skz from './../assets/Stray Kids_ODDINARY_1.png'
import Omorialbum from './../assets/omoriplaylist.png'
import Lolli from './../assets/lolli.png'

const Contact = () => {

    // const [name, setName] = React.useState("");
    // const [email, setEmail] = React.useState("");
    // const [message, setMessage] = React.useState("");

    // function encode(data) {
    //     return Object.keys(data)
    //         .map(
    //             (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    //         )
    //         .join("&");
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: encode({ "form-name": "contact", name, email, message }),
    //     })
    //         .then(() => alert("Message sent!"))
    //         .catch((error) => alert(error));
    // }

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_w6jd2qi', 'template_5qd38se', e.target, 'SyMtByT4SyycFfHFY')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="object-cover object-center rounded lg:w-2/3 md:w-1/2 bg-violet-950 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <img
                        width="100%"
                        height="100%"
                        title="img"
                        className="absolute inset-0"
                        // frameBorder={0}
                        // marginHeight={0}
                        // marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        // src="C:/Users/kawai/Desktop/my-portfolio1/public/lolli.svg"
                        // src="'./lolli.svg"


                        alt="img"
                        src={Lolli}

                    />
                    {/* <iframe
                        src="C:\Users\kawai\Desktop\my-portfolio1\public\lolli.png"
                        width="100%"
                        height="100%"
                        title="image"
                        // style="border:0;"
                        className="absolute inset-0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        style={{ filter: "opacity(0.7)" }}
                        />
                     */}
                    <div className="bg-violet-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-violet-200 tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <a href="https://goo.gl/maps/ZKdSuHK6WVP5Jii96" target="_blank" rel="noreferrer" className="mt-1 text-violet-400 hover:text-violet-200">
                                Officer's Enclave, Dhaula Kuan part 2 <br />
                                New Delhi, Delhi 110010
                            </a>
                        </div>
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-violet-200 tracking-widest text-xs">
                                PLAYLISTS ON REPEAT
                            </h2>
                            <div className="flex flex-row gap-x-3">
                                <div>
                                    <a href="https://open.spotify.com/playlist/46KaowzEEfEz6XBfqu86SG?si=851b98695c354228" target="_blank" rel="noreferrer">
                                        <img src={Omorialbum} className="lg:w-1/8 mt-4 object-scale-down h-10" alt="playlist" />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://open.spotify.com/playlist/4008OxeZV6arBqLsfuChCC?si=a62d6a49b0f24ba0" target="_blank" rel="noreferrer">
                                        <img src={Villain} className="lg:w-1/8 mt-4 object-scale-down h-10" alt="playlist" />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://open.spotify.com/playlist/37i9dQZF1DX3ZeFHRhhi7Y?si=3ddbebc93be84fa9" target="_blank" rel="noreferrer">
                                    <img src={Skz} className="lg:w-1/8 mt-4 object-scale-down h-10" alt="playlist" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-violet-200 tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noreferrer" className="text-violet-400 leading-relaxed hover:text-violet-200">
                                ananyadesai2929@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-violet-200 tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed text-violet-400">+91 70572 85644</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4">
                            <h2 className="title-font font-semibold text-violet-200 tracking-widest text-xs">
                                OTHER LINKS
                            </h2>
                            {/* <a href="linkedin.com/in/ananya-desai-a8a3bb216/" target="_blank" rel="noreferrer" className="mt-1 text-violet-400 hover:text-violet-200">
                                LinkedIn<br></br>
                            </a> */}
                            <a href="https://linkedin.com/in/ananya-desai-a8a3bb216/" target="_blank" rel="noreferrer">
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="violet"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg> */}
                                <button
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    class="mb-2 inline-block rounded text-xs font-medium uppercase leading-normal text-violet-400 transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </button>
                            </a>
                            {/* <a href="https://github.com/AnanyaNunDesai" target="_blank" rel="noreferrer" className="mt-1 text-violet-400 hover:text-violet-200">
                                GitHub
                            </a> */}
                            <br></br>
                            <a href="https://github.com/AnanyaNunDesai" target="_blank" rel="noreferrer">
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="violet"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg> */}
                                <button
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    class="mb-2 inline-block rounded text-xs font-medium uppercase leading-normal text-violet-400 transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <form
                    // netlify
                    name="contact"
                    onSubmit={sendEmail}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-violet-200 sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Hire Me
                    </h2>
                    <p className="leading-relaxed mb-5 text-violet-300">
                        Looking for cute art commissions or wish to hire me to help build your dream product? Send me a quick e-mail enquiry!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-violet-300">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-violet-950 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        // onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-violet-300">Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-violet-950 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-violet-300">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-violet-950 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        // onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    {/* <script src="https://www.google.com/recaptcha/api.js"></script>
                    <script>
                        function onSubmit(token) {
                            document.getElementById("demo-form")
                        }
                    </script> */}
                    <button
                        type="submit"
                        // data-sitekey="reCAPTCHA_site_key"
                        // data-callback='onSubmit'
                        // data-action='submit'
                        className="text-violet-200 bg-violet-600 border-0 py-2 px-6 focus:outline-none hover:bg-violet-500 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact


//YOUR SERVICE ID: service_w6jd2qi

//YOUR TEMPLATE ID: template_5qd38se

//YOUR USER ID: SyMtByT4SyycFfHFY

