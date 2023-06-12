'use client'
import { useState, useEffect } from 'react'
import { getAllEpisodes } from '@/lib/axios'
import { EpisodeProps, Episodes } from '@/interfaces/EpisodeProps'
import EpisodeCard from '@/components/EpisodeCard'
import Loading from '@/components/Loading/Loading'

const Episodes = () => {
  const [episodes, setEpisodes] = useState([] as Episodes)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)

  useEffect(() => {
    setLoading(true)
    getAllEpisodes(page).then((res: any) => {
      setEpisodes(episodes.concat(res.results))
      setHasNextPage(res.info.next !== null)
      setLoading(false)
    })
  }, [page])

  if(loading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium uppercase text-6xl my-8">Episodes</h1>
      <div className="flex gap-2  justify-center items-center flex-wrap">
        {episodes.map((episode: EpisodeProps) => (
          <EpisodeCard 
            key={episode.id}
            name={episode.name}
            airDate={episode.air_date}
            episode={episode.episode}
            url={`episodes/${episode.id}`}
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

export default Episodes