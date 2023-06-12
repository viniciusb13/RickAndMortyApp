'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react';

import LogoBlack from '../assets/logoBlack.svg'

const Header = () => {
  return (
    <div className="h-[60px] flex justify-between border px-5 sm:px-16 lg:px-40 items-center">
        <Link href="/" className="px-3">
            <Image
              src={LogoBlack}
              alt="Logo"
              width={46}
              height={49}
            />
        </Link>
        <div className="px-5 hidden sm:flex">
            <Link href="/characters" className="px-3">Characters</Link>
            <Link href="/locations" className="px-3">Locations</Link>
            <Link href="/episodes" className="px-3">Episodes</Link>
        </div>
        <div className="px-5 sm:hidden hover:cursor-pointer">
          <Menu />
        </div>
    </div>
  )
}

export default Header