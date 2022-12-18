import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h3 className='text-5xl font-bold text-white py-8'>The right price for your location.</h3>
                <p className='text-3xl'>I entertain your guests with varied music and interactions. Techno and Electronic are my specialties, but I can play any genre you wish for your location.</p>
            </div>
            <div className='grid md:grid-cols-2'>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>€499<span className='text-xl text-slate-500 flex flex-col justify-end'>/3h</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>I play a gig on your event. I am available for up to 3 hours at your event.</p>
                    <div className='text-2xl'>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Varied music</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Own equipment</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Entertainment</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Pure Enjoyment</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Maximum of 3 hours</p>
                        <button className='w-full py-4 my-4'><a href='https://www.instagram.com/jfigarro/' target='_blank'>Contact me now</a></button>
                    </div>
                </div>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Until Morning</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>€999<span className='text-xl text-slate-500 flex flex-col justify-end'>/night</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>I'm available all night at your location to put on music.</p>
                    <div className='text-2xl'>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Varied music</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Own equipment</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Entertainment</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Pure Enjoyment</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Available the whole night, for several gigs</p>
                        <button className='w-full py-4 my-4'><a href='https://www.instagram.com/jfigarro/' target='_blank'>Contact me now</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing