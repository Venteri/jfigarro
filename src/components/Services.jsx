import React from 'react'
import { PhoneIcon, ArrowSmallRightIcon, MusicalNoteIcon} from '@heroicons/react/24/outline'
import { CpuChipIcon, ServerIcon, NewspaperIcon} from '@heroicons/react/20/solid'
import dj1 from '../assets/dj1.jpg'

const Services = () => {
  return (
    <div className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute '>
            <img className='w-full h-full object-cover mix-blend-overlay' src={dj1} alt="" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Services</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <MusicalNoteIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Deejay</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Promotion</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <NewspaperIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Services</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services