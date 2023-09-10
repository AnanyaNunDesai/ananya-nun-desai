import { PencilIcon } from "@heroicons/react/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import Lolli from "./../assets/lolli_square.png";
import Aki from './../assets/aki.jpg'
import Shigeo from './../assets/rage.jpg'
import Vampire from './../assets/Illustration2bg.jpg'
import Hero from './../assets/Hero comms.png'
import OnlyOneOf from './../assets/onlyoneofnowhite.png'
import YoonJae from './../assets/yoonjae crouch.png'
import Sticker from './../assets/Illustration1(hairbackstickers).png'
import Rose from './../assets/gay bbabies light.png'
import Shingeo from './../assets/shigeo1.png'

import "swiper/swiper-bundle.min.css";
// import 'swiper/css'
import "./Slideshow.css";

SwiperCore.use([Navigation, Pagination]);

const Slideshow = () => {
    return (
        <section id="art">
            <div>
                <div className="flex flex-col w-full mb-10 text-violet-300 pt-20">
                    <PencilIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-violet-200 flex text-center justify-center">
                        My Art
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-violet-300">
                        My love for art is immense. Be it digital or traditional, I've
                        pacticed it for years on end. <br />
                        Here's a few examples of how I put it to use!
                    </p>
                </div>
                <div class="mb-20">
                    <div class="flex items-center justify-center">
                        <Swiper
                            navigation={true}
                            pagination={true}
                        //   onReachEnd={() => {alert("Reached End")}}
                        >
                            <SwiperSlide>
                                <img src={Aki} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={YoonJae} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Shingeo} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={OnlyOneOf} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Shigeo} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Sticker} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Vampire} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Hero} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Lolli} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Rose} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slideshow;