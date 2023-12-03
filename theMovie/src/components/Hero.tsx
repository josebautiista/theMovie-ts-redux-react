import Header from './Header'
import { useSelector, useDispatch } from 'react-redux'
import { type MoviesState, setMovies } from '../features/movies/movies'
import { useEffect, useState } from 'react'
import { type movie, type Movie } from '../type.d'
import axios from 'axios'
import { format, parseISO } from 'date-fns'
import { Loading } from '../atoms/Loading'

export const Hero: React.FC = (): JSX.Element => {
  const movies: Movie = useSelector((state: MoviesState) => state.movies)
  const [movieSelected, setMovieSelected] = useState<movie>(movies[0])
  const dispatch = useDispatch()

  const formatDate: (dateString: string) => string = (
    dateString: string
  ): string => {
    const parsedDate: Date = parseISO(dateString)
    return format(parsedDate, "MMMM do',' yyyy")
  }

  useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length)
      setMovieSelected(movies[randomIndex])
    }
  }, [movies])

  useEffect(() => {
    const interval = setInterval(() => {
      if (movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length)
        setMovieSelected(movies[randomIndex])
      }
    }, 6000)

    return () => {
      clearInterval(interval)
    }
  }, [movies])

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
          Accept: 'application/json'
        }
      })
      .then((response) => {
        dispatch(setMovies(response.data.results))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [dispatch])

  return (
    <div
      className="w-full relative h-96 bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage:
          movieSelected !== undefined
            ? `url(https://image.tmdb.org/t/p/original${movieSelected.poster_path})`
            : undefined
      }}
    >
      <div className="relative flex items-center h-full w-full max-w-4xl my-0 mx-auto px-5">
        <Header />
        <div className="text-center w-full">
          {movieSelected !== undefined
            ? (
            <div className=" text-left">
              <h1 className="md:text-4xl text-2xl font-bold">
                {movieSelected.title}
              </h1>
              <p className="md:text-lg text-md text-white">
                <b>Release:</b> {formatDate(movieSelected.release_date)}
              </p>
              <p className="md:text-lg text-md text-white">
                <b>Vote:</b> {movieSelected.vote_average}
              </p>
            </div>
              )
            : (
            <Loading />
              )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#002131] to-transparent"></div>
    </div>
  )
}
