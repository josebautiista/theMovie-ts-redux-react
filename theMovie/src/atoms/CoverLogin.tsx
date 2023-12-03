import { useSelector, useDispatch } from 'react-redux'
import { setMovies, type MoviesState } from '../features/movies/movies'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { type Movie } from '../type.d'
import { Loading } from './Loading'

export const CoverLogin: React.FC = () => {
  const movies: Movie = useSelector((state: MoviesState) => state.movies)
  const dispatch = useDispatch()
  const [urlImage, setUrlImage] = useState('/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg')

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length)
        const randomMovie = movies[randomIndex]
        const imageUrl = `https://image.tmdb.org/t/p/original${randomMovie.poster_path}`
        setUrlImage(imageUrl)
      }
    }, 6000)

    return () => {
      clearInterval(interval)
    }
  }, [movies])

  return (
    <div className="w-full h-full">
      {urlImage !== ''
        ? (
        <img
          src={`https://image.tmdb.org/t/p/original/${urlImage}`}
          alt="login"
          className="w-full h-full object-cover"
        />
          )
        : (
        <Loading />
          )}
    </div>
  )
}
