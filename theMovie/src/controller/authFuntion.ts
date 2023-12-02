export async function validatePassword (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  const hashedPlainPassword = await hashPassword(plainPassword)
  return hashedPlainPassword === hashedPassword
}

export function generarToken (): string {
  const caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const longitudToken = 30
  let token = ''

  for (let i = 0; i < longitudToken; i++) {
    token += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
  }

  return token
}

export async function hashPassword (password: string): Promise<string | null> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)

  try {
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('')

    return hashHex
  } catch (error) {
    console.error('Error al realizar el hash:', error)
    return null
  }
}
