import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaGoogle} from 'react-icons/fa'

const Footer = () => {
  return (
    <div name='footer' className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Contacts</h6>
                <ul>
                    <li className='py-1'><a href='https://www.facebook.com/JohnFigarro'/><FaFacebook/>John Figarro</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center'>
            <p className='py-4'>2022 Venteri</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaInstagram/>
                <FaGithub/>
                <FaGoogle/>
            </div>    
        </div>
    </div>
  )
}

export default Footer