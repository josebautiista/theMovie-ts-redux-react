import { useState } from 'react'
import { IoIosEyeOff, IoIosEye } from 'react-icons/io'

interface Props {
  type: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  label: string
  value: string
}

export const Input: React.FC<Props> = ({
  type,
  placeholder,
  onChange,
  name,
  label,
  value
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [typeInput, setTypeInput] = useState(type)

  const handleShowPassword: React.MouseEventHandler<HTMLDivElement> = () => {
    setShowPassword(!showPassword)
    setTypeInput(typeInput === 'password' ? 'text' : 'password')
  }

  return (
    <div className="relative flex flex-col items-start">
      <label htmlFor={name} className=" text-left text-base text-blue-500">
        {label}
      </label>
      <input
        type={typeInput}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        className="w-full h-12 rounded-lg py-2 px-4 outline-blue-400 font-bold text-gray-800 mt-2"
        required
      />
      {type === 'password'
        ? (
            showPassword
              ? (
          <div className="cursor-pointer">
            <IoIosEye
              className="absolute right-4 top-11 text-blue-400"
              size={24}
              onClick={handleShowPassword}
            />
          </div>
                )
              : (
          <div className="cursor-pointer">
            <IoIosEyeOff
              className="absolute right-4 top-11 text-blue-400"
              size={24}
              onClick={handleShowPassword}
            />
          </div>
                )
          )
        : null}
    </div>
  )
}
