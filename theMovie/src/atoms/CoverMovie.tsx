import React, { useEffect, useState } from 'react'
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { type movie, type UserLogin } from '../type'
import axios from 'axios'
import {
  setFavorite,
  deleteFavorite,
  type FavoriteState
} from '../features/movies/favorite'
import { clearFavoriteUser, setFavoriteUser } from '../features/user/user'
import { useNavigate } from 'react-router-dom'

interface Props {
  movie: movie
}

export const CoverMovie: React.FC<Props> = ({ movie }) => {
  const favoriteMovies = useSelector(
    (state: FavoriteState) => state.favorite.favorites
  )
  const isFavorite: boolean = favoriteMovies.some(
    (favMovie: movie) => favMovie.id === movie.id
  )
  const [favorite, setFavoriteState] = useState(isFavorite)
  const user = useSelector((state: UserLogin) => state.user.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleFavorite: React.MouseEventHandler<HTMLDivElement> = (): void => {
    const newFavoriteState: boolean = !favorite
    setFavoriteState(newFavoriteState)

    if (newFavoriteState) {
      axios
        .patch(`http://localhost:3000/users/${user.id}`, {
          favorite: [...user.favorite, movie.id]
        })
        .then(() => {
          dispatch(setFavorite(movie))
          dispatch(setFavoriteUser(movie.id))
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      axios
        .patch(`http://localhost:3000/users/${user.id}`, {
          favorite: user.favorite.filter((id: number) => id !== movie.id)
        })
        .then(() => {
          dispatch(deleteFavorite(movie.id))
          dispatch(clearFavoriteUser(movie.id))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  useEffect(() => {
    setFavoriteState(isFavorite)
  }, [favoriteMovies])

  const handleNavigate = (): void => {
    navigate(`/detail/${movie.id}`)
  }

  return (
    <div className="w-44 h-60 md:w-72 md:h-96 relative cursor-pointer">
      {favorite
        ? (
        <div className="cursor-pointer">
          <IoHeartSharp
            className="absolute top-2 left-2 text-blue-500 text-3xl"
            onClick={handleFavorite}
          />
        </div>
          )
        : (
        <div className="cursor-pointer">
          <IoHeartOutline
            className="absolute top-2 left-2 text-blue-400 text-3xl"
            onClick={handleFavorite}
          />
        </div>
          )}
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover rounded-t-xl md:rounded-xl"
        onClick={handleNavigate}
      />
      <div
        onClick={handleNavigate}
        className="absolute bottom-0 left-0 w-full h-2/3 md:rounded-xl bg-gradient-to-t from-black to-transparent"
      ></div>
      <h2 className="text-base absolute bottom-0 left-0 text-left text-white font-normal p-4 w-full">
        {movie.title}
      </h2>
    </div>
  )
}
