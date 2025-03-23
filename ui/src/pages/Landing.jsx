import React, { useState, useEffect, useRef } from "react";
import { Fstar, Netflix, my_image } from "../assets";
import { GoProjectSymlink } from "react-icons/go";
import { FaListUl, FaLink } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import { Tabs, Card, Button, Modal } from "antd";
import { ReactTyped } from "react-typed";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Skills",
      children: (
        <>
          <div className="flex flex-wrap mx-auto items-center">
            <span className="text-[18px] font-bold bg-blue-50 text-blue-600 px-4 rounded mb-4 py-1 border border-blue-500 mx-3">
              HTML5
            </span>
            <span class="bg-red-50 text-red-600 font-bold mx-3 px-4 py-1 text-[18px] rounded mb-4 border border-red-600">
              CSS5
            </span>
            <span class="bg-green-50 text-green-600 font-bold mx-3 px-4 py-1 text-[18px] rounded mb-4 border border-green-600">
              React Js
            </span>

            <span class="bg-yellow-50 text-yellow-600 font-bold mx-3 px-4 py-1  text-[18px] rounded mb-4 border border-yellow-500">
              Javascript
            </span>
            <span class="bg-purple-50 text-purple-600 font-bold mx-3 px-4 py-1  text-[18px] rounded mb-4 border border-purple-600">
              Git
            </span>
            <span class="bg-pink-50 text-pink-600 font-bold mx-3 px-4 py-1 text-[18px] rounded border border-pink-600">
              Testing
            </span>

            <span class="bg-indigo-50 text-indigo-600 font-bold mx-3 px-4 py-1 md:py-2  text-[18px] rounded mb-4 border border-indigo-600">
              Responsive Design
            </span>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <div onClick={showModal}>Services</div>
          <Modal
            title="Some of my services"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <div className="flex flex-wrap mx-auto items-center">
              <span class="bg-red-50 text-red-600 font-bold mx-3 px-4 py-1 text-[18px] rounded mb-4 border border-red-600">
                Consultation and Collaboration
              </span>
              <span class="bg-green-50 text-green-600 font-bold mx-3 px-4 py-1 text-[18px] rounded mb-4 border border-green-600">
                User Experience (UX) Design
              </span>
              <span class="bg-indigo-50 text-indigo-600 font-bold mx-3 px-4 py-1 md:py-2  text-[18px] rounded mb-4 border border-indigo-600">
                Performance Optimization
              </span>
              <span class="bg-yellow-50 text-yellow-600 font-bold mx-3 px-4 py-1  text-[18px] rounded mb-4 border border-yellow-500">
                Web and Application Development
              </span>
              <span class="bg-purple-50 text-purple-600 font-bold mx-3 px-4 py-1  text-[18px] rounded mb-4 border border-purple-600">
                Code Maintenance and Refactoring
              </span>
              <span class="bg-pink-50 text-pink-600 font-bold mx-3 px-4 py-1 text-[18px] rounded border border-pink-600">
                Testing and Debuging
              </span>
            </div>
            <div className="flex items-center justify-center mt-10">
            <button
  onClick={() =>
    window.location.href = "mailto:muthiilawrence124@gmail.com"
  }
  className="hover:border-[#000000] hover:text-[#353175] py-1 border-2 border-[#000] bg-[white] text-black
  hover:shadow-[#000] hover:shadow-sm hover:scale-125 text-[18px] font-semibold px-4"
>
  Call To Action
</button>
            </div>
          </Modal>
        </>
      ),
    },
    {
      key: "3",
      label: "Projects",
      children: (
        <div>
          <a
            onClick={() =>
              window.open("https://watergift.netlify.app", "_blank")
            }
            className="flex m-4 items-center gap-4 text-[18px] text-blue-500 hover:underline focus:outline-none"
          >
            <FaLink />
            <span>Project One</span>
          </a>
          <a
            onClick={() =>
              window.open("https://pckconstruction.netlify.app", "_blank")
            }
            className="flex m-4 items-center gap-4 text-[18px] text-blue-500 hover:underline focus:outline-none"
          >
            <FaLink />
            <span>Project Two</span>
          </a>
          <a
            onClick={() =>
              window.open("https://digifunzi.com", "_blank")
            }
            className="flex m-4 items-center gap-4 text-[18px] text-blue-500 hover:underline focus:outline-none"
          >
            <FaLink />
            <span>Project Three</span>
          </a>
          <a
            onClick={() =>
              window.open("https://watergift.netlify.app", "_blank")
            }
            className="flex m-4 items-center gap-4 text-[18px] text-blue-500 hover:underline focus:outline-none"
          >
            <FaLink />
            <span>Project Four</span>
          </a>
        </div>
      
      ),
    },
    {
      key: "4",
      label: "Pricing",
      children: "",
    },
    {
      key: "5",
      label: "Contact",
      children: "",
    },
  ];

  return (
    <>
      <section className="max-w-full mt-20">
        <div className="font-poppins flex justify-center items-center  md:max-w-[80%] mx-auto">
          <div className="py-2 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="px-6">
              <div className="space-x-8 lg:my-4">
             < h1 className="md:text-3xl font-bold italic bg-blue-100 px-4 rounded-3xl py-2">
    Hola, I'm Lawrence,{" "}
    <span className="text-green-600">
      <ReactTyped
        strings={[
          "An Experienced Software Engineer",
          "A Professional  Writer",
          "and a Tech Enthusiast"
        ]}
        typeSpeed={100}
        backSpeed={50}
        loop
      />
    </span>
  </h1>
                <p className="md:text-[20px] text-[17px] md:flex md:font-poppins my-6 mt-10 mx-0">
                  Turning ideas into real life projects is my calling.
                </p>
              </div>
              
                <div className=" my-[40px] md:ml-40 items-center justify-center md:justify-normal mx-auto flex ">
                  <button
                    className="hover:border-[#000000] hover:text-[#353175]  h-11 border-2 border-[#000] bg-[white] text-black
                hover:shadow-[#000] hover:shadow-sm hover:scale-125 text-[18px] font-semibold px-4"
                   onClick={() =>
    window.location.href = "mailto:muthiilawrence124@gmail.com"
  }

                >
                    Reach Out
                  </button>
                </div>
             
              <div className="mt-10">
                <Tabs
                  defaultActiveKey="1"
                  items={items}
                  onChange={onChange}
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center max-h-3/4 overflow-hidden relative">
              <div className="relative">
                <div className="bg-[#95d894] px-3 rounded-full h-11 flex items-center md:text-xl absolute  md:bottom-1/4 bottom-1/4 md:right-[-4rem] space-x-2">
                  <GoProjectSymlink className="text-white" />

                  <p className="text-black">
                  <CountUp end={100} duration={40} />+ completed projects
                  </p>
                </div>
                <div className="bg-[#abe7aa] px-3 rounded-full h-11 flex items-center md:text-xl absolute md:top-1/4 top-5 md:left-[-2rem] left-0 space-x-4">
                  <FaListUl className="text-white" />
                  <p classNamme="text-black">
                  <CountUp end={10} duration={40} />+ Languages
                    </p>
                </div>
                <img
                  class="w-3/4 h-full object-cover rounded-full mx-auto"
                  src={my_image}
                  alt=""
                />
              </div>
            </div>
          </div>
         
        </div>

      
      </section>
      </>
      );
};

export default Landing;
