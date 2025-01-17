'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'


import RickAndMorty from '@/assets/FullLogo.svg'
import CharactersImage from '@/assets/charactersImage.jpg'
import LocationsImage from '@/assets/locationsImage.jpg'
import EpisodesImage from '@/assets/episodesImage.jpeg'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-8">
      <Image src={RickAndMorty} height={500} width={700} alt="Rick and Morty" />
      <div className="pt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
        <Link href="/characters" className="m-8 border rounded">
          <Image src={CharactersImage} height={250} width={250} alt="cover"/>
          <p className='py-2 text-center text-xl'>Characters</p>
        </Link>
        <Link href="/locations" className="m-8 border rounded">
          <Image src={LocationsImage} height={250} width={250} alt="cover"/>
          <p className='py-2 text-center text-xl'>Locations</p>
        </Link>
        <Link href="episodes" className="m-8 border rounded">
          <Image src={EpisodesImage} height={250} width={250} alt="cover"/>
          <p className='py-2 text-center text-xl'>Episodes</p>
        </Link>
      </div>
    </main>
  )
}
