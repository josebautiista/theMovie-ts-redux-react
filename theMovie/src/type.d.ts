import * as z from 'zod'

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
  favorite: number[]
}

export type Users = User

export interface userLogin {
  id: number
  username: string
  email: string
  favorite: number[]
}

export type UserLogin = userLogin

export const SpokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string()
})
export type SpokenLanguage = z.infer<typeof SpokenLanguageSchema>

export const ProductionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string()
})
export type ProductionCountry = z.infer<typeof ProductionCountrySchema>

export const ProductionCompanySchema = z.object({
  id: z.number(),
  logo_path: z.string(),
  name: z.string(),
  origin_country: z.string()
})
export type ProductionCompany = z.infer<typeof ProductionCompanySchema>

export const GenreSchema = z.object({
  id: z.number(),
  name: z.string()
})
export type Genre = z.infer<typeof GenreSchema>

export const movieDetail = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  belongs_to_collection: z.null(),
  budget: z.number(),
  genres: z.array(GenreSchema),
  homepage: z.string(),
  id: z.number(),
  imdb_id: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  production_companies: z.array(ProductionCompanySchema),
  production_countries: z.array(ProductionCountrySchema),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number(),
  spoken_languages: z.array(SpokenLanguageSchema),
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number()
})
export type MovieDetail = z.infer<typeof WelcomeSchema>
