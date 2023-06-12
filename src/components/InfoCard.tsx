import React from 'react'
import Link from 'next/link';

type InfoCardProps = {
    title: string;
    info: string;
    url?: string;
}

const InfoCard = ({title, info, url}: InfoCardProps) => {
  return (
    <div className="border-b-2 p-3">
        <h3 className="font-bold text-md text-[#081f32]">{title}</h3>
        {url ? (
            <Link className="text-[#6E798C] font-normal" href={url}>{info}</Link>
         ) : (
            <p className="text-[#6E798C] font-normal">{info}</p>
        )}
    </div>
  )
}

export default InfoCard