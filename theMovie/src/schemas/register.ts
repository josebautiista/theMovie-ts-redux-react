import { z } from 'zod'

export const RegisterSchema = z.object({
  username: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(6).regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/)
})
