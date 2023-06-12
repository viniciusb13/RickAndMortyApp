'use client'
import { useState, useEffect} from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getEpisode, getMultipleCharacters } from '@/lib/axios'
import { EpisodeProps } from '@/interfaces/EpisodeProps'
import { CharacterProps, Characters } from '@/interfaces/CharacterProps'
import CharacterCard from '@/components/CharacterCard'
import Loading from '@/components/Loading/Loading'

const Episode = ({ params }: {params: {id: number}}) => {
  const [episode, setEpisode] = useState({} as EpisodeProps)
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState([] as Characters)
  const characterList = [] as number[]

  useEffect(() => {
    setLoading(true)
    getEpisode(params.id).then((res: any) => {
      setEpisode(res)
    })
  }, [])

  useEffect(() => {
    episode.characters?.map((char: string) => {
      characterList.push(Number(char.split('/').pop()))
    })
   
    if(characterList.length > 0) {
      getMultipleCharacters(characterList).then((res: any) => {
        setCharacters(res)
        setLoading(false)
      })
    }
  }, [episode])

  if(loading) {
    return <Loading />
  }

  return (
    <div>
      <div className="flex w-full">
        <Link href="/episodes" className="mb-4 flex">
          <ArrowLeft  />
          Go Back
        </Link>
      </div>
      <h1 className="text-[#081F32] font-normal text-4xl text-center mb-8">{episode.name}</h1>
      <div className="flex items-center justify-around mb-4">
        <div>
          <p className="text-left text-[#081F32] font-bold text-lg">Episode</p>
          <p className="text-[#00000099] font-normal text-sm tracking-[0.25px]">{episode.episode}</p>
          </div>
        <div>
          <p className="text-left text-[#081F32] font-bold text-lg">Date</p>
          <p className="text-[#00000099] font-normal text-sm tracking-[0.25px]">{episode.air_date}</p>
          </div>
      </div>
      <div>
        <h2 className="text-center font-medium text-[#8E8E93] tracking-[0.15px] text-xl">Cast</h2>
        <div className="flex gap-2  justify-center items-center flex-wrap">
          {characters?.map((character: CharacterProps) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              species={character.species}
              image={character.image}
              url={`characters/${character.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Episode