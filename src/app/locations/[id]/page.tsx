'use client'
import { useState, useEffect } from 'react'
import { getCharacter, getLocation, getMultipleCharacters } from '@/lib/axios'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import CharacterCard from '@/components/CharacterCard'
import { Characters, CharacterProps } from '@/interfaces/CharacterProps'
import { LocationProps } from '@/interfaces/LocationProps'
import Loading from '@/components/Loading/Loading'

const Location = ({ params }: {params: {id: number}}) => {
  const [location, setLocation] = useState({} as LocationProps)
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState([] as Characters | null)
  const [character, setCharacter] = useState({} as CharacterProps | null)
  const residentList = [] as number[]

  useEffect(() => {
    setLoading(true)
    getLocation(params.id).then((res: any) => {
      setLocation(res)
    })
  }, [])

  useEffect(() => {
    location.residents?.map((resident: string) => {
      residentList.push(Number(resident.split('/').pop()))
    })
   
    if(residentList.length > 1) {
      getMultipleCharacters(residentList).then((res: any) => {
        setCharacters(res)
        setCharacter(null)
        setLoading(false)
      })
    }

    if(residentList.length === 1) {
      getCharacter(residentList[0]).then((res: any) => {
        setCharacter(res)
        setCharacters(null)
      setLoading(false)
      })
    }

    if(residentList.length === 0) {
      setCharacter(null)
      setCharacters(null)
      setLoading(false)
    }

    console.log(location)

  }, [location])

  if(loading) {
    return <Loading />
  }

  return (
    <div>
      <div className="flex w-full justify-center md:justify-start">
        <Link href="/locations" className="mb-4 flex">
          <ArrowLeft  />
          Go Back
        </Link>
      </div>
      <h1 className="text-[#081F32] font-normal text-4xl text-center mb-8">{location.name}</h1>
      <div className="flex items-center justify-around mb-4">
        <div>
          <p className="text-left text-[#081F32] font-bold text-lg">Type</p>
          <p className="text-[#00000099] font-normal text-sm tracking-[0.25px]">{location.type}</p>
          </div>
        <div>
          <p className="text-left text-[#081F32] font-bold text-lg">Dimension</p>
          <p className="text-[#00000099] font-normal text-sm tracking-[0.25px]">{location.dimension}</p>
          </div>
      </div>
      <div>
        <h2 className="text-center font-medium text-[#8E8E93] tracking-[0.15px] text-xl">Residents</h2>
        <div className="flex gap-2  justify-center items-center flex-wrap">
          {characters &&
            characters?.map((character: CharacterProps) => (
              <CharacterCard
                key={character.id}
                name={character.name}
                species={character.species}
                image={character.image}
                url={`characters/${character.id}`}
              />
          ))}
          {
            character ?
              <CharacterCard
                key={character?.id}
                name={character?.name}
                species={character?.species}
                image={character?.image}
                url={`characters/${character?.id}`}
              />
              :
              <p className="p-3">0 Residents Found</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Location