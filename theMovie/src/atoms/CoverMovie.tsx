import React, { useState } from 'react'
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5'

interface Props {
  image: string
  title: string
}

export const CoverMovie: React.FC<Props> = ({ image, title }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavorite: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsFavorite(!isFavorite)
  }
  return (
    <div className="w-44 h-60 md:w-72 md:h-96 relative">
      {isFavorite
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
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-t-xl md:rounded-xl"
      />
      <div className="absolute bottom-0 left-0 w-full h-2/3 md:rounded-xl bg-gradient-to-t from-black to-transparent"></div>
      <h2 className="text-base absolute bottom-0 left-0 text-left text-white font-normal p-4 w-full">
        {title}
      </h2>
    </div>
  )
}
