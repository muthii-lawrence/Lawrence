import React from 'react';
import { Ffstar, Fstar, Skill, Skillshare, my_image } from '../assets';
import { GoProjectSymlink } from "react-icons/go";
import { FaListUl } from "react-icons/fa";


const Landing = () => {
  return (
  <section className='max-w-ful my-0'> 
    <div className='font-poppins shadow-lg shadow-black flex justify-center items-center  max-w-[95%] mx-auto'>  
        <div className='py-2 px-2  bg-gradient-radial-to-br from-lime-500 via-transparent to-transparent"
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            <div className='px-6'>
            <div className='space-x-8 my-4'>
                <h1 className='text-[50px] font-semibold font-poppins text-black '>This is Lawrence. I'm A <br /> 
                <p className='font-mono bg-[#abe7aa] px-6 rounded-full w-fit text-[45px] shadow-lg shadow-black text-white font-semibold mt-2'>
                    Front End Developer</p></h1>
                <p className='text-xl flex justify-center items-center font-sans my-6 mx-0'> Design and build your website from an experienced developer.
                 Also if you like any project to do you can contact me. Bring your dream project to live.</p>
            </div>
            <div className='space-x-[20%] mt-[40px] relative'>
                <a href=''> <button className='bg-[#000] text-white rounded-full h-11 hover:border-b-4 hover:border-[#9ff884] hover:bg-[white] hover:text-black
                hover:shadow-[#9ff884] hover:shadow-xl px-4'> Contact Me</button> </a>
                <a href=''> <button className='bg-[#000] text-white rounded-full h-11 hover:border-b-4 hover:border-[#9ff884] hover:bg-[white] hover:text-black
                hover:shadow-[#9ff884] hover:shadow-xl px-4'>Book an Appointment</button> </a>
            </div>
            <div className='flex space-y-0 space-x-[20%] items-baseline my-3 '>
                <div
                className=' my-0 w-24'>
                    <img className='w-24' src={Skillshare} alt="" /> <br />
                    <img src={Fstar} alt="" />
                </div>
                <div className='w-24'>
                    <img src={Skill} alt="" /> <br />
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
                </div>
                <img class='w-3/4 h-full object-cover rounded-full border-[#60e246] border-10 mx-auto' src={my_image} alt='' />
                </div>
            </div>
        </div>
        </div>    
</section>
  )
}

export default Landing
