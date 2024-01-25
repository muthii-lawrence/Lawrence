import React, {useState} from 'react';
import { Ffstar, Fstar, Html, Skill, Skillshare, my_image } from '../assets';
import { GoProjectSymlink } from "react-icons/go";
import { FaListUl } from "react-icons/fa";
import { Card } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"



const Landing = () => {
    
    const settings ={
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
            name:`Dream Wave`,
            spects:`HTML 5, CSS`
        },
        {
            img: `/images/html.png`,
            name:`Dream Wave`,
            spects:`Figma`
        },
        {
            img: `/images/44start.png`,
            name:`Dream Wave`,
            spects:`React js`
        },
        {
            img: `/images/html.png`,
            name:`Dream Wave`,
            spects:`Python`
        },
        {
            img: `/images/44start.png`,
            name:`Dream Wave`,
            spects:`Javascript`
        },
    ];

  return (
    <>
  <section className='max-w-ful my-0'> 
    <div className='font-poppins shadow-lg shadow-[#000] flex justify-center items-center  max-w-[98%] mx-auto'>  
        <div className='py-2 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 bg-gradient-to-tl from-stone-100 via-transparent to-green-300'>
            <div className='px-6'>
            <div className='space-x-8 my-4'>
                <h1 className='text-[50px] font-semibold font-poppins text-black '>This is Lawrence. I'm A <br /> 
                <p className='font-mono bg-[#37b467] px-6 rounded-full w-fit text-[45px] shadow-lg shadow-black text-white font-semibold mt-2'>
                   Software Engineer</p></h1>
                <p className='text-xl flex justify-center items-center font-sans my-6 mx-0'> Design and build your website from an experienced developer.
                 Also if you like any project to do you can contact me. Bring your dream project to live.</p>
            </div>
            <div className='space-x-[20%] mt-[40px] relative'>
                <button className='bg-[#55ce83] font-semibold text-white rounded-full h-11 hover:border-2 hover:border-[#50c473] hover:bg-[white] hover:text-black
                hover:shadow-[#9ff884] hover:shadow-xl px-4 transition-transform transform hover:rotate-180'> Contact Me</button>
                <button className='hover:border-[#000000] hover:rounded-none hover:text-[#353175]  h-11 border-2 border-[#61e29b] bg-[white] text-black
                hover:shadow-[#9ff884] hover:shadow-none font-semibold px-4'>Book an Appointment</button>
            </div>
            <div className='flex space-y-0 space-x-[20%] items-baseline my-3 '>
                <div
                className=' my-0 w-24'>
                    <img className='w-24' src={Skillshare} alt="" />
                    <img src={Fstar} alt="" />
                </div>
                <div className='w-24'>
                    <img src={Skill} alt="" />
                    <img src={Ffstar} alt="" />
                </div>
            </div>
        </div >
        <div class='flex flex-col justify-center items-center max-h-3/4 overflow-hidden relative'>
            <div class='relative'>

                <div className= 'bg-[#95d894] px-3 rounded-full h-11 flex items-center text-xl absolute  bottom-1/4 right-[-4rem] space-x-2'> 
                    <GoProjectSymlink className='text-white'/>   
                    <p className='text-black'>100+ completed projects</p>
                </div>
                <div className='bg-[#abe7aa] px-3 rounded-full h-11 flex items-center text-xl absolute top-1/4 left-[-2rem] space-x-4'>
                    <FaListUl className='text-white' />
                    <p classNamme='text-black'>10+ Languages</p>
                </div >
                <img class='w-3/4 h-full object-cover rounded-full shadow-2xl shadow-[#78c56d] mx-auto' src={my_image} alt='' />
                </div>
            </div>
        </div>
        </div>
</section>
<section>
    <h1 className='flex justify-center items-center text-[40px] font-bold my-4 px-6 py-4'>Skills</h1>
    <div className='w-3/4 m-auto'> 
    <div className='mt-10 mb-14'>
        <Slider {...settings}>
        {data.map((d) =>(
            <Card
            hoverable
            className='block rounded-lg shadow-xl shadow-neutral-600 justify-center items-center my-10 px-6 py-4 max-w-1/3 w-full bg-white'>
                <div className='border-b-2 mx-auto flex justify-center items-center border-gray-300 py-6'>
                    <img src={Fstar} alt="" className='w-24 my-0'/>
                </div>
                <div className="p-6 relative">
                    <p className='mb-2 text-[25px] font-bold'>{d.name}</p>
                    <p className='mb-4 text-center font-semibold text-[20px]'>{d.spects}</p>
                    <div className='absolute left-1/2 transform -translate-x-1/2 bottom-[-5rem]'>
                    <img src={d.img} alt="" className='w-24 mx-auto' /></div>
                </div>
            </Card>
        ))}
        </Slider>
    </div>

    </div>
</section>
<section>
<h1 className='flex justify-center items-center text-[40px] font-bold mt-4 px-6 pt-4 pb-0'>Projects</h1>
    <div className='flex justify-center items-center'>
    <div className='my-10 m-auto'>
        <div className='flex flex-cols px-6 py-4 max-w-3/4 w-full h-screen m-auto gap-20 overflow-hidden'>
            <div className="flex rounded-lg shadow-xl shadow-neutral-600 justify-center items-center w-[430px] h-1/2 bg-white">
                <h1>Project 1 </h1>            
            </div>
            <div className='flex rounded-lg shadow-xl shadow-neutral-600 justify-center items-center w-[430px] h-1/2 bg-white'>
                <h2>Poject 2</h2>
            </div>
        </div>
    </div>
    </div>
</section>
{/* <section>
    <h1 className='flex justify-center items-center text-[40px] font-bold my-4 px-6 py-4'>Skills</h1>
        <div className='flex flex-cols gap-8 max-w-3/4 w-full m-auto h-fit items-center justify-center'>
        <Slider {...settings}>
            <div>
                <Card className="block rounded-lg shadow-xl shadow-neutral-600 justify-center items-center px-6 py-4 max-w-1/3 w-full bg-white">

                    <div className="border-b-2 mx-auto flex justify-center items-center border-gray-300 py-6">
                        <img className='w-24' src={Ffstar} alt="" />
                    </div>
                    <div className="p-6 relative">
                    <h5 className="mb-2 text-[25px] font-bold">
                        Dream Wave
                    </h5>
                    <p className="mb-4 text-center font-semibold text-[20px]">
                        HTML 5, CSS
                    </p>
                    <div className='absolute left-1/2 transform -translate-x-1/2 bottom-[-5rem]'>
                        <img src={Html} alt="" className="mx-auto" />
                    </div>
                    </div>
                </Card>
            </div>
            <div>
                <Card className="block rounded-lg shadow-xl shadow-neutral-600 justify-center items-center px-6 py-4 max-w-1/3 w-full bg-white">

                    <div className="border-b-2 mx-auto flex justify-center items-center border-gray-300 py-6">
                        <img className='w-24' src={Fstar} alt="" />
                    </div>
                    <div className="p-6 relative">
                    <h5 className="mb-2 text-[25px] font-bold">
                        Dream Wave
                    </h5>
                    <p className="mb-4 text-center font-semibold text-[20px]">
                        Figma
                    </p>
                    <div className='absolute left-1/2 transform -translate-x-1/2 bottom-[-5rem]'>
                        <img src={Html} alt="" className="mx-auto" />
                    </div>
                    </div>
                </Card>
            </div>
            <div>
                <Card className="block rounded-lg shadow-xl shadow-neutral-600 justify-center items-center px-6 py-4 max-w-1/3 w-full bg-white">

                    <div className="border-b-2 mx-auto flex justify-center items-center border-gray-300 py-6">
                        <img className='w-24' src={Ffstar} alt="" />
                    </div>
                    <div className="p-6 relative">
                    <h5 className="mb-2 text-[25px] font-bold">
                        Dream Wave
                    </h5>
                    <p className="mb-4 text-center font-semibold text-[20px]">
                        React Js
                    </p>
                    <div className='absolute left-1/2 transform -translate-x-1/2 bottom-[-5rem]'>
                        <img src={Html} alt="" className="mx-auto" />
                    </div>
                    </div>
                </Card>
            </div>
            <div>
                <Card className="block rounded-lg shadow-xl shadow-neutral-600 justify-center items-center px-6 py-4 max-w-1/3 w-full bg-white">
                    <div className="border-b-2 mx-auto flex justify-center items-center border-gray-300 py-6">
                        <img className='w-24' src={Ffstar} alt="" />
                    </div>
                    <div className="p-6 relative">
                        <h5 className="mb-2 text-[25px] font-bold">
                            Dream Wave
                        </h5>
                        <p className="mb-4 text-center font-semibold text-[20px]">
                            HTML 5, CSS
                        </p>
                        <div className='absolute left-1/2 transform -translate-x-1/2 bottom-[-5rem]'>
                            <img src={Html} alt="" className="mx-auto" />
                        </div>
                    </div>
                </Card>
            </div>
            <div>
                <Card className="block rounded-lg shadow-xl shadow-neutral-600 justify-center items-center px-6 py-4 max-w-1/3 w-full bg-white">
                    <div className="border-b-2 mx-auto flex justify-center items-center border-gray-300 py-6">
                        <img className='w-24' src={Fstar} alt="" />
                    </div>
                    <div className="p-6 relative">
                        <h5 className="mb-2 text-[25px] font-bold">
                            Dream Wave
                        </h5>
                        <p className="mb-4 text-center font-semibold text-[20px]">
                            HTML 5, CSS
                        </p>
                    <div className='absolute left-1/2 transform -translate-x-1/2 bottom-[-5rem]'>
                        <img src={Html} alt="" className="mx-auto" />
                    </div>
                    </div>
                
                </Card>        
                </div>
                </Slider>
            </div>            
</section> */}

</>

  );
};

export default Landing
