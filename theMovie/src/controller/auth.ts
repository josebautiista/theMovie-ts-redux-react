import axios from 'axios'
import { type Users, type UserLogin } from '../type'
import { v4 as uuidv4 } from 'uuid'
import { generarToken, hashPassword, validatePassword } from './authFuntion'

export const login = async (data: {
  email: string
  password: string
}): Promise<{ token: string | null, user: UserLogin | null }> => {
  try {
    const { email, password } = data

    const response = await axios.get<Users[]>(
      'http://localhost:3000/users'
    )
    const users: Users[] = response.data

    const userFound = users.find((user: Users) => user.email === email)

    if (userFound === undefined) {
      throw new Error('Usuario no encontrado')
    }

    const isPasswordValid = await validatePassword(
      password,
      userFound.password
    )

    if (!isPasswordValid) {
      throw new Error('Contraseña incorrecta')
    }

    const token = generarToken()

    return {
      token,
      user: {
        id: userFound.id,
        username: userFound.username,
        email: userFound.email,
        favorite: userFound.favorite
      }
    }
  } catch (error) {
    console.error(error)
    return { token: null, user: null }
  }
}

export const register = async (data: {
  username: string
  email: string
  password: string
}): Promise<{ token: string | null, user: UserLogin | null }> => {
  const { username, email, password: plainPassword } = data

  try {
    const hashedPassword = await hashPassword(plainPassword)

    if (hashedPassword === null) {
      throw new Error('Error al generar el hash de la contraseña')
    }

    const userCreated = await axios.post(
      'http://localhost:3000/users',
      {
        id: uuidv4(),
        username,
        email,
        password: hashedPassword,
        favorite: []
      }
    )

    const token = generarToken()

    const user: UserLogin = {
      id: userCreated.data.id,
      username: userCreated.data.username,
      email: userCreated.data.email,
      favorite: userCreated.data.favorite
    }

    return { token, user }
  } catch (error) {
    console.error(error)
    return { token: null, user: null }
  }
}
