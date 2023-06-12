import Image from 'next/image'
import Link from 'next/link'

import RickAndMorty from '@/assets/FullLogo.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-8">
      <Image src={RickAndMorty} height={500} width={700} alt="Rick and Morty" />
      <div className="flex pt-8 flex-col md:flex-row">
        <Link href="/characters" className="p-8">Characters</Link>
        <Link href="/locations" className="p-8">Locations</Link>
        <Link href="episodes" className="p-8">Episodes</Link>
      </div>
    </main>
  )
}
