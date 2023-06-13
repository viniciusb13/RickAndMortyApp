'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react';

import { getCharacter, getEpisode, getMultipleEpisodes } from '@/lib/axios'
import InfoCard from '@/components/InfoCard'
import { CharacterProps } from '@/interfaces/CharacterProps'
import { EpisodeProps, Episodes } from '@/interfaces/EpisodeProps'
import Loading from '@/components/Loading/Loading';

const Character = ({ params }: { params: {id: number}}) => {
  const [character, setCharacter] = useState({} as CharacterProps)
  const [episodes, setEpisodes] = useState([] as EpisodeProps[] | null)
  const [episode, setEpisode] = useState({} as EpisodeProps | null)
  const [loading, setLoading] = useState(false)
  const episodeList = [] as number[]

  useEffect(() => {
    setLoading(true)

    getCharacter(params.id).then((res: any) => {
      setCharacter(res)
    })
  }, [])

  useEffect(() => {
    character.episode?.map((ep: string) => {
      episodeList.push(Number(ep.split('/').pop()))
    })
   
    if(episodeList.length > 1) {
      getMultipleEpisodes(episodeList).then((res: any) => {
        setEpisodes(res)
        setEpisode(null)
        setLoading(false)
      })
    }
    
    if(episodeList.length === 1) {
      getEpisode(episodeList[0]).then((res: any) => {
        setEpisode(res)
        setEpisodes(null)
        setLoading(false)
      })
    }

  }, [character])

  if(loading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col items-center pt-4">
      <div className="flex w-full justify-center md:justify-start">
        <Link href="/characters" className="mb-4 flex">
          <ArrowLeft  />
          Go Back
        </Link>
      </div>
      <div className="flex flex-col items-center mb-10 ">
        <Image
          src={character.image}
          height={300}
          width={300}
          alt={character.name}
          className="rounded-full border-[5px] border-[#F2F2F7] mb-4 w-[250px] md:w-[350px]"
        />
        <h1 className="text-[#081F32] font-normal text-4xl lg:text-5xl">{character.name}</h1>

      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="p-8">
          <h2 className="text-[#8E8E93] font-medium text-xl" >Informations</h2>
          <div className="flex flex-col mix-w-[312px] max-w-[413px] w-[350px] lg:w-[413px]">
            <InfoCard
              title="Gender"
              info={character.gender}
            />

            <InfoCard
              title="Status"
              info={character.status}
            />

            <InfoCard
              title="Species"
              info={character.species}
            />

            <InfoCard
              title="Origin"
              info={character.origin?.name}
              url={`/locations/${character.origin?.url.split('/').pop()}`}
            />

            <InfoCard
              title="Type"
              info={character.type ? character.type : 'unknown'}
            />

            <InfoCard
              title="Last Location"
              info={character.location?.name}
              url={`/locations/${character.location?.url.split('/').pop()}`}
            />
          </div>

        </div>
        <div className="p-8 flex flex-col">
          <h2 className="text-[#8E8E93] font-medium text-xl">{character.episode?.length > 1 ? 'Episodes' : 'Episode'}</h2>
          <div className="flex flex-col mix-w-[312px] max-w-[413px] w-[350px] lg:w-[413px]">
            {
              episodes && 
              episodes.map((episode: EpisodeProps) => (
                <div key={episode.id} className="border-b-2 p-3">
                  <Link href={`episodes/${episode.id}`}>
                    <h3 className="font-bold text-md text-[#081f32] pb-1">{episode.episode}</h3>
                    <p className="text-[#6E798C] font-medium text-sm tracking-[0.25px]">{episode.name}</p>
                    <p className="font-medium text-xs text-[#8E8E93] tracking-[1.5px] uppercase pt-1">{episode.air_date}</p>
                  </Link>
                </div>
              ))
            }
            {
              episode &&
              <div key={episode?.id} className="border-b-2 p-3">
                <Link href={`episodes/${episode?.id}`}>
                  <h3 className="font-bold text-md text-[#081f32] pb-1">{episode?.episode}</h3>
                  <p className="text-[#6E798C] font-medium text-sm tracking-[0.25px]">{episode?.name}</p>
                  <p className="font-medium text-xs text-[#8E8E93] tracking-[1.5px] uppercase pt-1">{episode?.air_date}</p>
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Character