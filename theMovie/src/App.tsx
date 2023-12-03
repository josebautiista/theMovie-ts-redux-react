import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Inicio } from './pages/Inicio'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { DetailMovie } from './pages/DetailMovie'
import axios from 'axios'
import { type RatedState, setRated } from './features/movies/rated'
import { setupcoming, type upcomingState } from './features/movies/upcoming'
import { type Movie, type UserLogin } from './type'
import { setFavorite } from './features/movies/favorite'
import { useEffect, useState } from 'react'
import { type MoviesState } from './features/movies/movies'

function App (): JSX.Element {
  const token = useSelector((state: any) => state.token.token)
  const user = useSelector((state: UserLogin) => state.user.user)
  const favorite = user !== null ? user.favorite : []
  const [favoritesSet, setFavoritesSet] = useState(false)
  const movies = useSelector((state: MoviesState) => state.movies)
  const rated = useSelector((state: RatedState) => state.rated)
  const upcoming = useSelector((state: upcomingState) => state.upcoming)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            Accept: 'application/json'
          }
        }
      )
      .then((response) => {
        dispatch(setRated(response.data.results))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            Accept: 'application/json'
          }
        }
      )
      .then((response) => {
        dispatch(setupcoming(response.data.results))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const searchMovie = (favorite: number[]): Movie => {
    const moviesFound: Movie = []

    favorite.forEach((id: number) => {
      const foundInMovies = movies.find((movie) => movie.id === id)
      const foundInRated = rated.find((movie) => movie.id === id)
      const foundInUpcoming = upcoming.find((movie) => movie.id === id)

      if (foundInMovies !== undefined) {
        moviesFound.push(foundInMovies)
      } else if (foundInRated !== undefined) {
        moviesFound.push(foundInRated)
      } else if (foundInUpcoming !== undefined) {
        moviesFound.push(foundInUpcoming)
      }
    })

    return moviesFound
  }

  useEffect(() => {
    if (
      movies.length > 0 &&
      rated.length > 0 &&
      upcoming.length > 0 &&
      !favoritesSet
    ) {
      searchMovie(favorite).forEach((movie) => {
        dispatch(setFavorite(movie))
      })
      setFavoritesSet(true)
    }
  }, [upcoming])

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user === null ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={user === null ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={token !== null ? <Inicio /> : <Navigate to="/login" />}
        />
        <Route path="/detail/:idMovie" element={<DetailMovie />} />
      </Routes>
    </Router>
  )
}

export default App
