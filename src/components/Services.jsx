import React from 'react'
import { PhoneIcon, ArrowSmallRightIcon, MusicalNoteIcon} from '@heroicons/react/24/outline'
import { CpuChipIcon, ServerIcon, NewspaperIcon} from '@heroicons/react/20/solid'
import dj1 from '../assets/dj1.jpg'

const Services = () => {
  return (
    <div name='services' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute '>
            <img className='w-full h-full object-cover mix-blend-overlay' src={dj1} alt="" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Services</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>What can we do for you?</h3>
                <p className='py-4 text-3xl text-slate-300'>If you just need a deejay for your event or maybe also some promotion for your party John is here to help you out.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <MusicalNoteIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Deejay</h3>
                        <p className='text-gray-600 text-xl'>Other then my own songs, I play the latest hits and many other popular hits. Also the music is adapted to the audience of your location.</p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Promotion</h3>
                        <p className='text-gray-600 text-xl'>I make promotional stories on my instagram and other channels to promote your event. When you also book me as a deejay i can guarantee you, that there will be a large publicum.</p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <NewspaperIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Services</h3>
                        <p className='text-gray-600 text-xl'>Other services, for example, include the invitation of guests to your event.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services