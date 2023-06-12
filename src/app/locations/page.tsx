'use client'
import { useEffect, useState} from 'react'
import { Locations, LocationProps } from '@/interfaces/LocationProps'
import { getAllLocations } from '@/lib/axios'
import LocationCard from '@/components/LocationCard'
import Loading from '@/components/Loading/Loading'

const Locations = () => {
  const [locations, setLocations] = useState([] as Locations)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)

  useEffect(() => {
    setLoading(true)
    getAllLocations(page).then((res: any) => {
      setLocations(locations.concat(res.results))
      setHasNextPage(res.info.next !== null)
      setLoading(false)
    })
  }, [page])

  if(loading) {
    return <Loading />
  }

  return (
    <div className="text-center">
      <h1 className="font-medium uppercase text-6xl my-8">Locations</h1>
      <div className="flex gap-2  justify-center items-center flex-wrap">
        {locations.map((location: LocationProps) => (
          <LocationCard
            key={location.id} 
            name={location.name}
            type={location.type}
            url={`locations/${location.id}`}
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

export default Locations