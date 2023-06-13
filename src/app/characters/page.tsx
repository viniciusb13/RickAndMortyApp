'use client'
import { useState, useEffect} from 'react'

import { getAllCharacters } from '@/lib/axios'
import {  CharacterProps } from '@/interfaces/CharacterProps'
import CharacterCard from '@/components/CharacterCard'
import Loading from '@/components/Loading/Loading'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)

  useEffect(() => {
    setLoading(true)
    getAllCharacters(page).then((res: any) => {
      setCharacters(characters.concat(res.results))
      setHasNextPage(res.info.next !== null)
      setLoading(false)
    })
  }, [page])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium uppercase sm:text-2xl md:text-4xl lg:text-6xl my-8">Characters</h1>
      <div className="flex gap-2  justify-center items-center flex-wrap">
        {characters.map((character: CharacterProps) => (
          <CharacterCard
              key={character.id}
              name={character.name}
              species={character.species}
              image={character.image}
              url={`characters/${character.id}`}
            />
        ))}
        </div>
        <button
          className="tracking-wide uppercase text-[#2196f3] font-medium text-sm drop-shadow-lg rounded-lg px-6 py-2 my-6 bg-[#f2f9fe] hover:bg-[#cde9fd] disabled:opacity-50 disabled:cursor-default"
          onClick={() => setPage(page + 1)}
          disabled={!hasNextPage}
        >
          Load More
        </button>
    </div>
  )
}

export default Characters