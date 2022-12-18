import React, {useState} from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handleClose  = () => setNav(!nav);

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>JFiggaro</h1>
                <ul className='hidden md:flex'>
                    <li className='cursor-pointer'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className='cursor-pointer'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li className='cursor-pointer'><Link to="services" smooth={true} offset={-50} duration={500}>Services</Link></li>
                    <li className='cursor-pointer'><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                </ul>
            </div>
            
            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <Bars3Icon className='w-5'/> : <XMarkIcon className='w-5'/>}
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="services" smooth={true} offset={-50} duration={500}>Services</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
            <div className='flex flex-col'>
            </div>
        </ul>
    </div>
  )
}

export default Navbar

