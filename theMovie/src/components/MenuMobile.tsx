import { useState } from 'react'
import { type UserLogin } from '../type'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosArrowBack } from 'react-icons/io'
import { FaRegUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Account from './Account'

interface Props {
  handleLogout: () => void
  user: UserLogin
}

export const MenuMobile: React.FC<Props> = ({
  user,
  handleLogout
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  const handleAccount = (): void => {
    if (isOpen) {
      toggleMenu()
    }

    setIsAccountOpen(!isAccountOpen)
  }
  return (
    <>
      {' '}
      <button
        className="absolute top-5 left-5 z-30 p-2 "
        style={{ display: isOpen ? 'none' : 'block' }}
        onClick={toggleMenu}
      >
        <RxHamburgerMenu className="text-3xl text-white" />
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gray-800 bg-opacity-75 z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full w-full bg-transparent py-8 px-10 z-40 flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <FaRegUserCircle className="text-4xl mb-4 text-white" />
              <h1 className="text-2xl font-bold mb-4 text-white">
                {user.username}
              </h1>
            </div>

            <div className="cursor-pointer">
              <IoIosArrowBack
                className="text-4xl mb-4 text-white"
                onClick={toggleMenu}
              />
            </div>
          </div>

          <ul className="text-white flex flex-col items-start gap-5">
            <li onClick={toggleMenu}>
              <a href="/#popular" className="mb-2 text-md text-white">
                Popular
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="/#rated" className="mb-2 text-md text-white">
                Top Rated
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="/#upcoming" className="mb-2 text-md text-white">
                Upcoming
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="/#favorites" className="mb-2 text-md text-white">
                Favorite
              </a>
            </li>
          </ul>

          <ul className="text-white flex flex-col items-start gap-5">
            <Link
              to="#account"
              className="mb-2 text-2xl text-white font-bold"
              onClick={handleAccount}
            >
              Acount
            </Link>

            <li className="mb-2 text-xl" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>

      </div>
      {isAccountOpen && (
              <Account username={user.username} isOpen={isAccountOpen} email={user.email} closeModal={handleAccount} />
      )}
    </>
  )
}
