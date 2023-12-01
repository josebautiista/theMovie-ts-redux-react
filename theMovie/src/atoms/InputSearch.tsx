interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

export const InputSearch: React.FC<Props> = ({ onChange, placeholder }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="w-full h-12 rounded-lg py-2 px-4 font-bold text-white bg-transparent border-blue-400 outline-none border-2"
      />
    </div>
  )
}
