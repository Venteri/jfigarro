import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaGoogle, FaSoundcloud} from 'react-icons/fa'

const Footer = () => {
  return (
    <div name='footer' className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid border-b-2 border-gray-600 py-8'>
            <div className='relative'>
                <h6 className='font-bold uppercase pt-2 justify-between text-center'>Contacts</h6>
                <ul>
                    <li className='flex py-1'><a href='https://www.facebook.com/JohnFigarro' target='_blank'><FaFacebook className='w-8 mr-1'/>John Figarro</a></li>
                    <li className='flex py-1'><a href='https://www.instagram.com/jfigarro/' target='_blank'><FaInstagram className='w-8 mr-1'/>jfigarro</a></li>
                    <li className='flex py-1'><a href='https://soundcloud.com/john-figarro' target='_blank'><FaSoundcloud className='w-8 mr-1'/>john-figarro</a></li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center'>
            <p className='py-4'>2022 Venteri.</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <a href='https://www.instagram.com/venteri_san/' target='_blank'><FaInstagram/></a>
                <a href='https://github.com/Venteri' target='_blank'><FaGithub/></a>
                <a href="mailto:velibor.venteri@gmail.com"><FaGoogle/></a>
            </div>    
        </div>
    </div>
  )
}

export default Footer