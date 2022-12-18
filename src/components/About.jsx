import React from 'react'

import JF2 from '../assets/JF2.png'

const about = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>
                    Techno and Eletronic Hits for your next Event
                </h2>
                <p className='text-3xl py-6 text-gray-500'>Listen to Johns newest Hits on SoundCloud.</p>
            </div>
            <a href='https://soundcloud.com/john-figarro' target='_blank'><img src={JF2} alt="" /></a>
        </div>
    </div>
  )
}

export default about