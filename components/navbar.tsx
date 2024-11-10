import React from 'react'
import Image from 'next/image';

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMEnuOpen] =useState(false)

  const toggleMenu = () => {
    setIsMEnuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
        <div >
        <div className='flex justify-between  items-center' >
            <div className=' ml-10 '>
              <Image
              src='/maimoona (1).png'
              className="w-24 h-auto rounded-full full-cover" 
              alt={'logo'} 
              width={96}
              height={96}/>
              
        
            </div>
            <ul className='gap-10 lg:gap text-white flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
            <div className='md:hidden' onClick={toggleMenu}> 
              {isMenuOpen ? <AiOutlineClose size={30} />:<AiOutlineMenu size={30} />}
                    </div>
        </div>
      </div>
      {isMenuOpen && (
        <ul className='flex flex-col gap-4 mt-4 md:hidden'>
          <li className='menuLink'><a href='#hero' onClick={toggleMenu}>Home</a></li>
          <li className='menuLink'><a href='#about' onClick={toggleMenu}>About</a></li>
          <li className='menuLink'><a href='#skills' onClick={toggleMenu}>Skills</a></li>
          <li className='menuLink'><a href='#contact' onClick={toggleMenu}>Contact</a></li>
        </ul>
      )

      }
    </div>
  )
}

export default Navbar
