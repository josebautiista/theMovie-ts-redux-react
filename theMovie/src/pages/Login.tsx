import { useState } from 'react'
import { CoverLogin } from '../atoms/CoverLogin'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../controller/auth'
import { useDispatch } from 'react-redux'
import { setToken } from '../features/token/token'
import { setUserLogin } from '../features/user/user'

export const Login: React.FC = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const { token, user } = await login(data)
    if (token !== null) {
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      dispatch(setToken(token))
      dispatch(setUserLogin(user))
      navigate('/')
    } else {
      setError(true)
    }
  }

  return (
    <div className="w-full h-screen flex">
      <div className="w-full md:w-1/3 h-screen flex items-center justify-center ">
        <div className="w-3/4  h-4/5 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-white text-left">Login</h1>
            <p className="text-white text-left text-base">
              Log in with your data that your entered during your registration
            </p>
          </div>
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="jhondoe@me.com"
              name="email"
              label="Enter your email address"
              onChange={handleChange}
              value={data.email}
            />
            <Input
              type="password"
              placeholder="●●●●●●●●●●"
              name="password"
              label="Enter your password"
              onChange={handleChange}
              value={data.password}
            />
            <Button text="Login" />

            {error && (
              <p className="text-red-500 text-center text-base">
                Incorrect email or password
              </p>
            )}
          </form>
          <p className="text-white text-center text-base mt-7">Don’t have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>

      <div className="w-2/3 h-screen overflow-hidden hidden md:flex">
        <CoverLogin />
      </div>
    </div>
  )
}
