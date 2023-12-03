import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type userLogin, type UserLogin } from '../type'
import { clearUserLogin } from '../features/user/user'
import { clearToken } from '../features/token/token'
import { MenuMobile } from './MenuMobile'
import { MenuDesktop } from './MenuDesktop'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const user: UserLogin = useSelector((state: userLogin) => state.user.user)
  const dispatch = useDispatch()

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  const handleLogout = (): void => {
    toggleMenu()
    localStorage.removeItem('tokenMovie')
    localStorage.removeItem('user')
    dispatch(clearUserLogin())
    dispatch(clearToken())
    window.location.reload()
  }

  return (
    <div className="absolute top-0 left-0 w-full px-5">
      <div className="flex md:hidden">
        <MenuMobile handleLogout={handleLogout} user={user} />
      </div>
      <div className="hidden md:flex">
        <MenuDesktop handleLogout={handleLogout} user={user} />
      </div>
    </div>
  )
}

export default Header
