import Link from 'next/link'
import React from 'react'

type EpisodeCardProps = {
    name: string;
    episode: string;
    airDate: string;
    url: string;
}

const EpisodeCard = ({ name, episode, airDate, url } : EpisodeCardProps) => {
  return (
    <Link href={url} className="m-4">
      <div className="flex flex-col text-md bg-white text-center rounded-lg max-w-[240px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-8 px-6 min-h-[128px] min-w-[240px]">
        <h3 className="font-bold text-xl text-[#081f32] pb-1">{name}</h3>
        <p className="font-medium text-sm text-[#8E8E93] tracking-[0.25px] py-1">{airDate}</p>
        <p className="text-[#6E798C] font-bold text-sm tracking-[0.25px]">{episode}</p>
      </div>
    </Link>
  )
}

export default EpisodeCard