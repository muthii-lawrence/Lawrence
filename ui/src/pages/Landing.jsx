import React from 'react'
import { my_image } from '../assets'

const Landing = () => {
  return (
  <section>
    <div className='my-0 py-4 px-10 bg-[conic-gradient(#9233ea,#db2777,#2564eb)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
        <div >
            <div className='space-x-8'>
                <h1 className=''>This is Lawrence. I'm A <br /> <span>Frot End Developer</span></h1>
                <p> All texts</p>
            </div>
            <div className='flex'>
                <button> Contact Me</button>
                <button>Book an Appointment</button>
            </div>
            <div className='flex'>
                <div>
                    logo1 <br /> Ratings
                </div>
                <div>
                    logo2 <br /> Ratings
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className='flex flex-col justify-center items-center max-h-3/4 overflow-hidden'>
            <img className='w-3/4 h-fit object-bottom rounded-full' src={my_image} alt="" />
            <span className='bg-[#000] rounded-xl text-white text-2xl font-serif'>100+ completed projects</span>
            <span className='bg-[#000] rounded-xl text-white text-2xl font-serif'></span>
        </div>
    </div>
    </section>
  )
}

export default Landing
