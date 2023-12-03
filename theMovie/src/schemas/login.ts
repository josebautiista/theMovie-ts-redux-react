import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/)
})
