import React, { useState, useEffect, useRef } from "react";
import { Fstar, Netflix, my_image } from "../assets";
import { GoProjectSymlink } from "react-icons/go";
// import Slider from "react-slick";
import { FaListUl, FaLink } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import { Tabs, Card, Button, Modal } from "antd";
// import { Form } from "../pages/Form";

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

  // const [isVisible, setIsVisible] = useState(false);
  // const counterRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const elementOffsetTop = counterRef.current.offsetTop;

  //     if (scrollPosition >= elementOffsetTop - window.innerHeight / 2) {
  //       setIsVisible(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
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
                  (window.location.href =
                    "mailto:muthiilawrence124@gmail.com.com")
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
              window.open("https://watergift.netlify.app", "_blank")
            }
            className="flex m-4 items-center gap-4 text-[18px] text-blue-500 hover:underline focus:outline-none"
          >
            <FaLink />
            <span>Project Two</span>
          </a>
          <a
            onClick={() =>
              window.open("https://watergift.netlify.app", "_blank")
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
        // <section className="bg-gradient-to-br from-white via-green-100 to-white">
        //   <h1 className="flex justify-center items-center text-[40px] font-bold mt-4 px-6 pt-4 pb-0">
        //     Projects
        //   </h1>
        //   <div className="flex justify-center items-center">
        //     <div className="my-10 m-auto">
        //       <div className="flex flex-wrap md:flex-cols px-6 py-4 md:max-w-3/4 w-full justify-center items-center h-fit m-auto gap-40 overflow-hidden">
        //         <div className="relative sm:w-1/2 lg:w-[430px] h-1/2 overflow-hidden rounded-lg shadow-xl shadow-neutral-600 transition-opacity hover:blur-lg">
        //           <img
        //             src={Netflix}
        //             alt=""
        //             className="w-full h-full object-cover rounded-lg transition-opacity hover:blur-sm"
        //           />
        //           <div className="absolute inset-0 flex rounded-lg items-center justify-center opacity-0 transition-opacity hover:opacity-100">
        //             <button className="text-white text-[16px] font-bold bg-black rounded-full hover:bg-green-300 hover:text-black py-2 px-5">
        //               Project 1
        //             </button>
        //           </div>
        //         </div>
        //         <div className="relative sm:w-1/2 lg:w-[430px] h-1/2 overflow-hidden rounded-lg shadow-xl shadow-neutral-600 transition-opacity hover:blur-lg">
        //           <img
        //             src={Netflix}
        //             alt=""
        //             className="w-full h-full object-cover rounded-lg transition-opacity hover:blur-sm"
        //           />
        //           <div className="absolute inset-0 flex rounded-lg items-center justify-center opacity-0 transition-opacity hover:opacity-100">
        //             <button className="text-white text-[16px] font-bold bg-black rounded-full hover:bg-green-300 hover:text-black py-2 px-5">
        //               Project 1
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>
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
        <div className="font-poppins flex justify-center items-center  max-w-[98%] mx-auto">
          <div className="py-2 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="px-6">
              <div className="space-x-8 lg:my-4">
                <h1 className="md:text-[45px] text-[27px] mt-10 font-bold font-poppins text-black ">
                  This is Lawrence. I'm A <br />
                  <p className="font-mono bg-[#37b467] px-4 rounded-full w-fit lg:text-[45px] py-2 md:py-0 text-[24px]  text-white font-bold mt-10">
                    Software Engineer{" "}
                  </p>
                </h1>
                <p className="md:text-[20px] text-[17px] md:flex md:font-poppins my-6 mt-10 mx-0">
                  Turning ideas into real life projects is my calling.
                </p>
              </div>
              
                <div className=" my-[40px] md:ml-40 items-center justify-center md:justify-normal mx-auto flex ">
                  <button
                    className="hover:border-[#000000] hover:text-[#353175]  h-11 border-2 border-[#000] bg-[white] text-black
                hover:shadow-[#000] hover:shadow-sm hover:scale-125 text-[18px] font-semibold px-4"
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
                    <CountUp end={100} />+ completed projects
                  </p>
                </div>
                <div className="bg-[#abe7aa] px-3 rounded-full h-11 flex items-center md:text-xl absolute md:top-1/4 top-5 md:left-[-2rem] left-0 space-x-4">
                  <FaListUl className="text-white" />
                  <p classNamme="text-black">10+ Languages</p>
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
        {/* <div className="flex flex-col items-center bg-neutral-900 hover:bg-neutral-800 text-center text-white">
          <div className="container px-6 pt-2">
            <div className="mb-1 flex justify-center">
              <a
                href="https://github.com/muthii-lawrence/"
                className="m-4 h-9 w-9 rounded-full border-2 border-white text-white hover:scale-125"
              >
                <FaGithub className="mx-auto h-full w-4" fill="currentColor" />
              </a>

              <a
                href="/"
                className="m-4 h-9 w-9 rounded-full border-2 border-white text-white hover:scale-125"
              >
                <FaXTwitter
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                />
              </a>
              <a
                href="/"
                className="m-4 h-9 w-9 rounded-full border-2 border-white text-white hover:scale-125"
              >
                <FaInstagram
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                />
              </a>
              <a
                href="/"
                className="m-4 h-9 w-9 rounded-full border-2 border-white text-white hover:scale-125"
              >
                <FaLinkedinIn
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                />
              </a>
              <a
                href="/"
                className="m-4 h-9 w-9 rounded-full border-2 border-white text-white hover:scale-125"
              >
                <FaWhatsapp
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                />
              </a>
            </div>
          </div>
        </div> */}
      </section>
      {/* <section className="">
        <h1 className="flex justify-center items-center text-[40px] font-bold mt-4 px-6 py-4">
          Skills
        </h1>
        <div className="bg-gradient-to-b from-[#C0F1BF] to-[#ffffff]">
          <div className="md:w-3/4 w-full overflow-hidden m-auto px-4">
            <div className="mt-6 mb-14">
              <Slider {...settings}>
                {data.map((d) => (
                  <Card
                    hoverable
                    className="block rounded-xl shadow-xl shadow-neutral-300 justify-center items-center my-10 px-6 py-4 max-w-[full] lg:max-w-1/3 w-full h-fit bg-white"
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
      </section> */}
      {/* <section>
        <div className="my-10">
          <h2
            className="bg-gradient-to-b from-[#C0F1BF] to-[#ffffff flex justify-center items-center
             text-[35px] font-bold mt-6 px-6 py-1"
          >
            My Services
          </h2>
          <div className="">
            <div className="md:w-3/4 w-full mx-auto px-4">
              <div className=""></div>
              <Slider {...styles}>
                <Card
                  hoverable
                  className="block rounded-lg shadow-lg shadow-neutral-400 justify-center 
             items-center my-10 px-6 py-2 max-w-1/3 w-full bg-red-300"
                >
                  <div className="relative mb-3 text-center font-semibold text-white">
                    <h1 className="mb-4 text-[24px] font-bold">Designing</h1>
                    <p className="text-center font-mediumbold text-[17px]">
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
                      Optimization <br /> and <br /> Performance
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
      </section> */}
      {/* <section className="bg-gradient-to-br from-white via-green-100 to-white">
        <h1 className="flex justify-center items-center text-[40px] font-bold mt-4 px-6 pt-4 pb-0">
          Projects
        </h1>
        <div className="flex justify-center items-center">
          <div className="my-10 m-auto">
            <div className="flex flex-wrap md:flex-cols px-6 py-4 md:max-w-3/4 w-full justify-center items-center h-fit m-auto gap-20 overflow-hidden">
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
      </section> */}
      {/* <section class="text-neutral-700 w-full md:w-3/4 mx-auto px-6 py-4">
        <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 class="mb-6 text-3xl font-bold">Testimonials And Reviews</h3>
          <p class="mb-6 pb-2 md:mb-12 md:pb-0">
            What others are saying about my services
          </p>
        </div>

        <div class=" gap-10 text-center ">
          <Slider {...settings}>
            <div class="block rounded bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-20 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div class="mx-auto -mt-6 w-24 overflow-hidden rounded-full border-2 border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="" /> <p className="text-[50px] font-bold">M</p>
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Murage Lawrence</h4>
                <hr />
                <p class="mt-4">
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>

            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="" /> <p className="text-[50px] font-bold">M</p>
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Murage Lawrence</h4>
                <hr />
                <p class="mt-4">
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="" /> <p className="text-[50px] font-bold">M</p>
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Murage Lawrence</h4>
                <hr />
                <p class="mt-4">
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>

            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="" /> <p className="text-[50px] font-bold">M</p>
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Murage Lawrence</h4>
                <hr />
                <p class="mt-4">
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <a href="/your review">
          <button className="flex justify-center items-center right-0 mx-auto mt-6 bg-blue-400 text-white text-[16px] font-bold text-center px-12 py-2">
            Leave your Review
          </button>
        </a>
      </section> */}
    </>
  );
};

export default Landing;
