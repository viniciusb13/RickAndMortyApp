import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  name: string;
  species: string;
  image: string;
  url: string;
}

const CharacterCard = ({name, species, image, url}: Props) => {
  return (
    <Link href={url} className="m-4">
      <div
        className="flex flex-col bg-white rounded-lg max-w-[240px] drop-shadow-xl"
      >
          <Image src={image} alt="Character" width={240} height={200} className="rounded-t-lg" />
          <div className="p-2">
            <h2 className="text-lg opacity-90">{name}</h2>
            <p className="text-sm opacity-60">{species}</p>
        </div>
      </div>
    </Link>
  )
}

export default CharacterCard