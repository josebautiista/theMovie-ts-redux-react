import { useParams } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { type ProductionCompany, type Genre, type MovieDetail } from '../type'

export const DetailMovie = (): JSX.Element => {
  const { idMovie } = useParams()
  const [movie, setMovie] = useState<MovieDetail | undefined>()

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      )
      .then((response) => {
        setMovie(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [idMovie])

  return (
    <div className="w-full">
      <Hero />
      <div className="max-w-4xl mx-auto mt-8 rounded-lg p-6">
        {movie !== undefined && (
          <div className="flex flex-col md:flex-row items-center md:items-start text-white">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-64 h-96 object-cover rounded-lg shadow-md"
            />
            <div className="md:ml-6 mt-4 md:mt-0">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <p className="text-white text-sm mt-2">
                Release Date: {movie.release_date}
              </p>
              <p className="text-white text-sm mt-2">
                Rating: {movie.vote_average}
              </p>
              <p className="text-white mt-4 text-left">{movie.overview}</p>
              <p className="text-white text-xl mt-2">Genres:</p>
              <ul className="flex flex-wrap my-2 w-full justify-center gap-4 mx-auto">
                {movie.genres.map((genre: Genre) => (
                  <li
                    key={genre.id}
                    className="text-white text-sm mt-2 p-2 bg-blue-600 rounded-md"
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
              <p className="text-white text-xl mt-2">Powered by:</p>
              <ul className="flex flex-wrap my-8 w-2/3 justify-center gap-4 mx-auto">
                {movie.production_companies.map(
                  (company: ProductionCompany) => {
                    if (company.logo_path !== null) {
                      return (
                        <li
                          key={company.id}
                          className="flex items-center flex-col text-white text-sm mt-2 p-2 bg-white rounded-md"
                        >
                          <img
                            src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`}
                            alt={`${company.name} logo`}
                            className="w-30 h-10 mr-2"
                          />
                        </li>
                      )
                    }
                    return null
                  }
                )}
              </ul>
              <a
                href={movie.homepage}
                className="text-white text-2xl"
                target="_blank"
                rel="noreferrer"
              >
                Visit website
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
