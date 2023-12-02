import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { type UserLogin } from '../type'

interface Props {
  handleLogout: () => void
  user: UserLogin
}

export const MenuDesktop: React.FC<Props> = ({ user, handleLogout }): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex justify-between h-24 w-full">
      <ul className="text-white flex gap-5 items-center justify-start w-4/5">
        <Link to="#popular" className="mb-2 text-md text-white">
          Popular
        </Link>
        <Link to="#rated" className="mb-2 text-md text-white">
          Top Rated
        </Link>
        <Link to="#upcoming" className="mb-2 text-md text-white">
          Upcoming
        </Link>
        <Link to="#favorites" className="mb-2 text-md text-white">
          Favorite
        </Link>
      </ul>
      <div className="flex items-center justify-end gap-5 w-52 relative">
        <FaRegUserCircle className="text-2xl mb-4 text-white" />
        <h1 className="text-xl font-bold mb-4 text-white">{user.username}</h1>
        <IoIosArrowDown
          className="text-2xl mb-4 text-white cursor-pointer"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div className="absolute right-16 top-16">
          <div className="bg-white p-2 shadow-md rounded-md">
            <ul className="space-y-2">
              <li>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 rounded-md transition duration-300"
                  onClick={() => {
                    console.log('Account')
                  }}
                >
                  Account
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 rounded-md transition duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>

        )}
      </div>
    </div>
  )
}
