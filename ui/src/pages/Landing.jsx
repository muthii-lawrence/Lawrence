import React, { useState } from "react";
import {
  Ffstar,
  Fstar,
  Html,
  Netflix,
  Skill,
  Skillshare,
  location,
  my_image,
} from "../assets";
import { GoProjectSymlink } from "react-icons/go";
import { Card } from "antd";
import Slider from "react-slick";
import { FaListUl } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLocationDot } from "react-icons/fa6";

const Landing = () => {
  const settings = {
    button: true,
    gap: "100px",
    rtl: true,
    direction: "right",
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const styles = {
    dots: true,
    pasueOnHover: true,
    showArrows: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      img: `/images/html.png`,
      name: `Dream Wave`,
      spects: `HTML 5, CSS`,
    },
    {
      img: `/images/figmaa.png`,
      name: `Figma`,
      spects: `Design`,
    },
    {
      img: `/images/react.png`,
      name: `React Js`,
      spects: `Development`,
    },
    {
      img: `/images/python.png`,
      name: `Dream Wave`,
      spects: `Python`,
    },
    {
      img: `/images/js.png`,
      name: `Dream Wave`,
      spects: `Javascript`,
    },
  ];
  return (
    <>
      <section className="max-w-ful my-0">
        <div className="font-poppins shadow-lg shadow-[#000] flex justify-center items-center  max-w-[98%] mx-auto">
          <div className="py-2 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 bg-gradient-to-tl from-stone-100 via-transparent to-green-200">
            <div className="px-6">
              <div className="space-x-8 my-4">
                <h1 className="text-[50px] font-semibold font-poppins text-black ">
                  This is Lawrence. I'm A <br />
                  <p className="font-mono bg-[#37b467] px-6 rounded-full w-fit text-[45px] shadow-lg shadow-black text-white font-semibold mt-2">
                    Front-end Developer
                  </p>
                </h1>
                <p className="text-xl flex justify-center items-center font-sans my-6 mx-0">
                  {" "}
                  Design and build your website from an experienced developer.
                  Also if you like any project to do you can contact me. Bring
                  your dream project to live.
                </p>
              </div>
              <div className="space-x-[20%] mt-[40px] relative">
                <button
                  className="bg-[#55ce83] font-semibold text-white rounded-full h-11 hover:border-2 hover:border-[#50c473] hover:bg-[white] hover:text-black
                hover:shadow-[#9ff884] hover:shadow-xl px-4 transition-transform transform hover:rotate-180"
                >
                  {" "}
                  Contact Me
                </button>
                <button
                  className="hover:border-[#000000] hover:rounded-none hover:text-[#353175]  h-11 border-2 border-[#61e29b] bg-[white] text-black
                hover:shadow-[#9ff884] hover:shadow-none font-semibold px-4"
                >
                  Book an Appointment
                </button>
              </div>
              <div className="flex space-y-0 space-x-[20%] items-baseline my-3 ">
                <div className=" my-0 w-24">
                  <img className="w-24" src={Skillshare} alt="" />
                  <img src={Fstar} alt="" />
                </div>
                <div className="w-24">
                  <img src={Skill} alt="" />
                  <img src={Ffstar} alt="" />
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-center items-center max-h-3/4 overflow-hidden relative">
              <div class="relative">
                <div className="bg-[#95d894] px-3 rounded-full h-11 flex items-center text-xl absolute  bottom-1/4 right-[-4rem] space-x-2">
                  <GoProjectSymlink className="text-white" />
                  <p className="text-black">100+ completed projects</p>
                </div>
                <div className="bg-[#abe7aa] px-3 rounded-full h-11 flex items-center text-xl absolute top-1/4 left-[-2rem] space-x-4">
                  <FaListUl className="text-white" />
                  <p classNamme="text-black">10+ Languages</p>
                </div>
                <img
                  class="w-3/4 h-full object-cover rounded-full shadow-2xl shadow-[#78c56d] mx-auto"
                  src={my_image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <h1 className="flex justify-center items-center text-[40px] font-bold mt-4 px-6 py-4">
          Skills
        </h1>
        <div className="bg-gradient-to-b from-[#C0F1BF] to-[#ffffff]">
          <div className="w-3/4 m-auto">
            <div className="mt-6 mb-14">
              <Slider {...settings}>
                {data.map((d) => (
                  <Card
                    hoverable
                    className="block rounded-xl shadow-xl shadow-neutral-300 justify-center items-center my-10 px-6 py-4 max-w-1/3 w-full h-fit bg-white"
                  >
                    <div className="border-b-2 mx-auto flex justify-center items-center border-gray-300 py-6">
                      <img src={Fstar} alt="" className="w-24 my-0" />
                    </div>
                    <div className="p-6 mx-auto relative flex flex-col items-center justify-center">
                      <p className="mb-2 text-[20px] font-bold">{d.name}</p>
                      <p className="mb-4 text-center font-semibold text-[25px]">
                        {d.spects}
                      </p>
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5rem]">
                        <img
                          src={d.img}
                          alt=""
                          className="w-24 mx-auto bg-gray-50"
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="my-10">
          <h2
            className="bg-gradient-to-b from-[#C0F1BF] to-[#ffffff flex justify-center items-center
             text-[35px] font-bold mt-6 px-6 py-1"
          >
            My Services
          </h2>
          <div className="">
            <div className="w-2/3 m-auto">
              <div className=""></div>
              <Slider {...styles}>
                <Card
                  hoverable
                  className="block rounded-lg shadow-lg shadow-neutral-400 justify-center 
             items-center my-10 px-6 py-2 max-w-1/3 w-full bg-red-300"
                >
                  <div className="relative mb-3 text-center font-semibold text-white">
                    <h1 className="mb-4 text-[24px] font-bold">Designing</h1>
                    <p className="text-center font-mediumbold text-[16px]">
                      User Experience (UX)
                      <p className="text-center font-mediumbold text-[19px]">
                        User Interface (UI)
                      </p>{" "}
                    </p>
                  </div>
                </Card>
                <Card
                  hoverable
                  className="block rounded-lg shadow-lg shadow-neutral-400 justify-center 
             items-center my-10 px-6 py-2 max-w-1/3 w-full bg-blue-600"
                >
                  <div>
                    <p className="mb-4 text-center font-semibold text-[18px] text-white ">
                      Responsive Web Design and Cross-Browser Compatibility:
                    </p>
                  </div>
                </Card>
                <Card
                  hoverable
                  className="block rounded-lg shadow-lg shadow-neutral-400 justify-center 
             items-center my-10 px-6 py-2 max-w-1/3 w-full bg-gray-300"
                >
                  <div className="relative mb-3 text-center font-semibold text-white">
                    <h1 className="mb-4 text-[24px] font-bold">
                      Optimization and Performance
                    </h1>
                  </div>
                </Card>
                <Card
                  hoverable
                  className="block rounded-lg shadow-lg shadow-neutral-400 justify-center 
             items-center my-10 px-6 py-2 max-w-1/3 w-full bg-teal-300"
                >
                  <div className="relative mb-3 text-center font-semibold text-white">
                    <h1 className="mb-4 text-[24px] font-bold">
                      Progressive Web App Development:
                    </h1>
                  </div>
                </Card>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-green-100 to-white">
        <h1 className="flex justify-center items-center text-[40px] font-bold mt-4 px-6 pt-4 pb-0">
          Projects
        </h1>
        <div className="flex justify-center items-center">
          <div className="my-10 m-auto">
            <div className="flex flex-wrap md:flex-cols px-6 py-4 max-w-3/4 w-full justify-center items-center h-fit m-auto gap-20 overflow-hidden">
              <div className="relative sm:w-1/2 lg:w-[430px] h-1/2 overflow-hidden rounded-lg shadow-xl shadow-neutral-600 transition-opacity hover:blur-lg">
                <img
                  src={Netflix}
                  alt=""
                  className="w-full h-full object-cover rounded-lg transition-opacity hover:blur-sm"
                />
                <div className="absolute inset-0 flex rounded-lg items-center justify-center opacity-0 transition-opacity hover:opacity-100">
                  <button className="text-white text-[16px] font-bold bg-black rounded-full hover:bg-green-300 hover:text-black py-2 px-5">
                    Project 1
                  </button>
                </div>
              </div>
              <div className="relative sm:w-1/2 lg:w-[430px] h-1/2 overflow-hidden rounded-lg shadow-xl shadow-neutral-600 transition-opacity hover:blur-lg">
                <img
                  src={Netflix}
                  alt=""
                  className="w-full h-full object-cover rounded-lg transition-opacity hover:blur-sm"
                />
                <div className="absolute inset-0 flex rounded-lg items-center justify-center opacity-0 transition-opacity hover:opacity-100">
                  <button className="text-white text-[16px] font-bold bg-black rounded-full hover:bg-green-300 hover:text-black py-2 px-5">
                    Project 1
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>reviews</section>
      <section>
        <div class="font-medium relative">
            <div class="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap bg-white">
              <div class="lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ring-1 ring-slate-900">
                <iframe
                  width="100%"
                  height="100%"
                  class="absolute inset-0"
                  frameborder="0"
                  title="map"
                  marginheight="0"
                  marginwidth="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                  className="filter: grayscale(1) contrast(1.2) opacity(0.4);"
                ></iframe>
                <div className="bg-white py-6 rounded lg:h-fit lg:w-1/3 shadow-md font-poppins">
                  <div className=" h-1/2 px-6 py-6">
                    <h2 className="text-[16px] font-semibold text-gray-900 tracking-widest">
                      ADDRESS
                    </h2>
                    <p className="mt-1 text-lg text-blue-900 ">
                      342-01000 Nairobi
                    </p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 py-2 lg:mt-0">
                    <h2 className="text-[14px] font-bold text-gray-900 tracking-widest text-xs">
                      EMAIL
                    </h2>
                    <a className="text-blue-950 mt-1 leading-relaxed">
                      murage.lawrence@gmail.com
                    </a>
                    <h2 className="text-[14px] font-bold text-gray-900 tracking-widest text-xs mt-4">
                      PHONE
                    </h2>
                    <p className="text-blue-950 py-2 leading-relaxed">
                      +254795684016
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 bg-green-50 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 border border-black px-12 hover hover:bg-green-100 py-0">
                <h2 className="text-gray-900 text-[20px] font-serif mb-4 font-bold flex items-center justify-center">
                  Get In Touch
                </h2>

                <div className="relative mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Names"
                    className="w-full bg-white border outline-none border-gray-600 font-serif text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    id="name"
                    name="email"
                    placeholder="Email"
                    className="w-full bg-white border outline-none border-gray-600 font-serif outline-1 text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="w-full bg-white border border-gray-600 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button className="text-white font-serif bg-blue-700 border-0 py-2 px-6 w-full mx-auto focus:outline-none hover:bg-blue-900 shadow-lg hover:shadow-blue-700 font-bold text-xl">
                  Send
                </button>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
