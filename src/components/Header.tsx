import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import DarkMode from './DarkMode'
import Link from 'next/link'
export default function Header() {
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto pt-5 '>
          <div className='flex gap-5'>
              <MenuItem title='home' address='/' Icon={ AiFillHome} />
              <MenuItem title='about' address='/about' Icon={ BsFillInfoCircleFill} />
          </div>
        <div className='flex gap-5 items-center '>
          <DarkMode/>
          <Link href={'/'} >
            <span className='bg-amber-500 px-4 py-2 font-bold rounded-lg text-2xl'>IMDB</span>
          </Link>
        </div>

    
      </div>
  )
}
