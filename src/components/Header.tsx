'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react';

import LogoBlack from '../assets/logoBlack.svg'

const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!isActive);
  }

  const menuOpened = 'z-50 px-5 absolute right-0 top-0 w-[300px] h-full bg-white transition ease-in-out duration-300'

  const menuClosed = 'hidden'

  const menuOpenedOverlay = 'z-10 absolute right-0 top-0 w-full h-full bg-black opacity-50 transition ease-in-out duration-300'
  const menuClosedOverlay = 'hidden'

  return (
    <header className="h-[60px] flex justify-between border px-5 sm:px-16 lg:px-40 items-center">
        <Link href="/" className="px-3">
            <Image
              src={LogoBlack}
              alt="Logo"
              width={46}
              height={49}
            />
        </Link>
        <ul className="px-5 hidden sm:flex">
          <li>
            <Link href="/characters" className="px-3">Characters</Link>
          </li>
          <li>
            <Link href="/locations" className="px-3">Locations</Link>
          </li>
          <li>
            <Link href="/episodes" className="px-3">Episodes</Link>
          </li>
        </ul>
        <div className="px-5 sm:hidden hover:cursor-pointer" onClick={toggleMenu}>
          <Menu />
        </div>
        <div className={isActive ? menuOpened : menuClosed} >
            <div className="pt-4">
              <X onClick={toggleMenu} className="cursor-pointer" />
            </div>
            <ul className="flex flex-col mt-7">
              <li className="p-4">
                <Link href="/characters" onClick={toggleMenu} className="px-3 text-3xl my-4 text-center">Characters</Link>
              </li>
              <li className="p-4">
                <Link href="/locations" onClick={toggleMenu} className="px-3 text-3xl my-4 text-center">Locations</Link>
              </li>
              <li className="p-4">
                <Link href="/episodes" onClick={toggleMenu} className="px-3 text-3xl my-4 text-center">Episodes</Link>
              </li>
            </ul>
        </div>
        <div className={isActive ? menuOpenedOverlay : menuClosedOverlay} />
    </header>
  )
}

export default Header