import { useSelector } from 'react-redux'
import { Hero } from '../components/Hero'
import { SectionMovies } from '../components/SectionMovies'
import { type MoviesState } from '../features/movies/movies'
import { type RatedState } from '../features/movies/rated'
import { type upcomingState } from '../features/movies/upcoming'
import { type FavoriteState } from '../features/movies/favorite'

export const Inicio: React.FC = () => {
  const movies = useSelector((state: MoviesState) => state.movies)
  const rated = useSelector((state: RatedState) => state.rated)
  const upcoming = useSelector((state: upcomingState) => state.upcoming)
  const favorites = useSelector(
    (state: FavoriteState) => state.favorite.favorites
  )

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <Hero />
      <div className="w-full flex items-center justify-center flex-col gap-2 max-w-7xl my-0 mx-auto">
        <SectionMovies nombre="Popular" movies={movies} id="popular" />
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-2 max-w-7xl my-0 mx-auto">
        <SectionMovies nombre="Top Rated" movies={rated} id="rated" />
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-2 max-w-7xl my-0 mx-auto">
        <SectionMovies nombre="Upcoming" movies={upcoming} id="upcoming" />
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-2 max-w-7xl my-0 mx-auto">
        <SectionMovies nombre="Favorites" movies={favorites} id="favorites" />
      </div>
    </div>
  )
}
