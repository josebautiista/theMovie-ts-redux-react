import { useEffect, useState } from 'react'
import { CoverMovie } from '../atoms/CoverMovie'
import { InputSearch } from '../atoms/InputSearch'
import { type Movie } from '../type'
import { MdFilterAlt } from 'react-icons/md'
import { NotFound } from '../atoms/NotFound'
import { Loading } from '../atoms/Loading'

interface Props {
  nombre: string
  movies: Movie
  id: string
}

export const SectionMovies: React.FC<Props> = ({ nombre, movies, id }) => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(false)

  const filteredMovies: Movie = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  const handleActive = (): void => {
    setActive(!active)
  }

  useEffect(() => {
    if (movies.length > 0) {
      setLoading(false)
    }
  }, [movies])

  return (
    <section className="w-full h-max py-12 px-3 md:px-0" id={id}>
      <div className="flex items-center gap-2">
        <h2 className="text-3xl font-bold text-white text-left">
          {nombre} ({filteredMovies.length})
        </h2>
        <div className="cursor-pointer">
          <MdFilterAlt className="text-3xl text-white" onClick={handleActive} />
        </div>
      </div>
      {active && (
        <InputSearch
          value={search}
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      )}

      <div className="flex overflow-x-auto gap-6">
        {id === 'favorites' && movies.length === 0
          ? (
          <div className="w-full h-96 flex items-center justify-center">
            <NotFound />
          </div>
            )
          : movies.length === 0
            ? (
          <div className="w-full h-96 flex items-center justify-center">
            {loading && <Loading />}
          </div>
              )
            : filteredMovies.length === 0
              ? (
          <div className="w-full h-96 flex items-center justify-center">
            <NotFound />
          </div>
                )
              : (
                  filteredMovies.map((movie, index) => (
            <div key={index} className="w-auto py-4">
              <CoverMovie movie={movie} />
            </div>
                  ))
                )}
      </div>
    </section>
  )
}
