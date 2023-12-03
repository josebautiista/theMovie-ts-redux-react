import { useState } from 'react'
import { CoverLogin } from '../atoms/CoverLogin'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../controller/auth'
import { useDispatch } from 'react-redux'
import { setToken } from '../features/token/token'
import { setUserLogin } from '../features/user/user'
import { LoginSchema } from '../schemas/login'
import { z } from 'zod'

export const Login: React.FC = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault()

    try {
      const validatedData = LoginSchema.parse(data)
      login(validatedData).then(({ token, user }) => {
        if (token !== null) {
          localStorage.setItem('tokenMovie', token)
          localStorage.setItem('user', JSON.stringify(user))
          dispatch(setToken(token))
          dispatch(setUserLogin(user))
          navigate('/')
          window.location.reload()
        } else {
          setError(true)
        }
      }).catch((error) => {
        console.error('Error during login:', error)
      })
    } catch (error) {
      console.error('Validation error:', error)
      if (error instanceof z.ZodError) {
        setErrors(error.errors.reduce((prev: Record<string, string>, curr) => {
          if (curr.path !== undefined) {
            if (curr.message === 'Invalid') {
              prev[curr.path.join('.')] = 'Password must contain at least 1 number'
              return prev
            }
            prev[curr.path.join('.')] = curr.message
          }
          return prev
        }, {}))
      }
    }
  }

  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-full md:w-1/3 h-screen flex items-center justify-center ">
        <div className="w-3/4 flex flex-col gap-8">
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
            {errors.email !== undefined && <p className="text-red-500">{errors.email}</p>}
            <Input
              type="password"
              placeholder="●●●●●●●●●●"
              name="password"
              label="Enter your password"
              onChange={handleChange}
              value={data.password}
            />
            {errors.password !== undefined && <p className="text-red-500">{errors.password}</p>}
            <Button text="Login" />

            {error && (
              <p className="text-red-500 text-center text-base">
                Incorrect email or password
              </p>
            )}
          </form>
          <p className="text-white text-center text-base mt-7">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>

      <div className="w-2/3 h-screen overflow-hidden hidden md:flex">
        <CoverLogin />
      </div>
    </div>
  )
}
