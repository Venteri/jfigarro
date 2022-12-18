import React from 'react'
import JF from '../assets/JF.png'
const Hero = () => {
  return (
    <div name='home' className='w-full sm:h-1/2 bg-zinc-200 flex-col'>
        <div className='grid mt-2 text-center content-center'>
            <div className='flex-col justify-center w-full px-2 py-8'>
                <p className='text-2xl'>Unique Techno Production</p>
                <h1 className='py-3 text-5xl md:text-6xl font-bold'>John Figarro</h1>
                <p className='text-2xl'>Take your party to the next Level.</p>
                <button className='py-3 px-6 my-4 max-w-md'><a href='https://www.instagram.com/jfigarro/' target='_blank'> Contact Now</a></button>
            </div>
                <img className='m-auto w-[50%] z-0 max-w-lg' src={JF} alt="A picture of John Figarro."/>
        </div>
    </div>
  )
}

export default Hero