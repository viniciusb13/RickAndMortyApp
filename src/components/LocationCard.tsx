import Link from 'next/link';
import React from 'react'

type LocationCardProps = {
    name: string;
    type: string;
    url: string;
}

const LocationCard = ({ name, type, url } : LocationCardProps ) => {
  return (
    <Link href={url} className="m-4">
        <div className="flex flex-col text-md bg-white text-center items-center justify-center rounded-lg max-w-[240px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-8 px-6 min-h-[128px] min-w-[240px]">
            <h2 className="text-[#000000DE] font-medium text-xl tracking-[0.15px]">{name}</h2>
            <p className="text-[#00000099] font-normal text-sm tracking-[0.25px]">{type}</p>
        </div>
    </Link>
  )
}

export default LocationCard