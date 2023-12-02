export interface movie {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type Movie = movie[]

export interface User {
  id: number
  username: string
  password: string
  email: string
}

export type Users = User

export interface userLogin {
  id: number
  username: string
  email: string
}

export type UserLogin = userLogin
