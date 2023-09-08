import { PencilIcon } from "@heroicons/react/solid"

const Slideshow = () => {
    return (

        

        <div>
            <div className="flex flex-col w-full mb-10 text-violet-300 mt-20">
                <PencilIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-violet-200 flex text-center justify-center">
                    My Art
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-violet-300">
                    My love for art is immense. Be it digital or traditional, I've pacticed it for years on end. <br />
                    Here's a few examples of how I put it to use!
                </p>
            </div>
            <div
                id="carouselExampleCaptions"
                className="relative mr-20 ml-20 mb-20 h-1/2 w-1/2 rounded-lg flex items-center justify-center"
                data-carousel-init
                data-ride="carousel">
                {/* <!--Carousel indicators--> */}
                <div
                    className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                    data-carousel-indicators>
                    <button
                        type="button"
                        data-target="#carouselExampleCaptions"
                        data-slide-to="0"
                        data-carousel-active
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                    <button
                        type="button"
                        data-target="#carouselExampleCaptions"
                        data-slide-to="1"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 2"></button>
                    <button
                        type="button"
                        data-target="#carouselExampleCaptions"
                        data-slide-to="2"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 3"></button>
                </div>

                {/* <!--Carousel items--> */}
                <div
                    className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded-lg">
                    {/* <!--First item--> */}
                    <div
                        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-carousel-active
                        data-carousel-item
                        styles="backface-visibility: hidden">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                            className="block w-full"
                            alt="..." />
                        <div
                            className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">First slide label</h5>
                            <p>
                                Some representative placeholder content for the first slide.
                            </p>
                        </div>
                    </div>
                    {/* <!--Second item--> */}
                    <div
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-carousel-item
                        styles="backface-visibility: hidden">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                            className="block w-full"
                            alt="..." />
                        <div
                            className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">Second slide label</h5>
                            <p>
                                Some representative placeholder content for the second slide.
                            </p>
                        </div>
                    </div>
                    {/* <!--Third item--> */}
                    <div
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-carousel-item
                        styles="backface-visibility: hidden">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                            className="block w-full"
                            alt="..." />
                        <div
                            className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">Third slide label</h5>
                            <p>
                                Some representative placeholder content for the third slide.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!--Carousel controls - prev item--> */}
                <button
                    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-target="#carouselExampleCaptions"
                    data-slide="prev">
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </span>
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Previous</span>
                </button>
                {/* <!--Carousel controls - next item--> */}
                <button
                    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-target="#carouselExampleCaptions"
                    data-slide="next">
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slideshow

