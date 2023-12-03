interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  value: string
}

export const InputSearch: React.FC<Props> = ({
  onChange,
  placeholder,
  value
}) => {
  return (
    <div className="relative my-5 md:w-1/3 w-full">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-full h-12 rounded-lg py-2 px-4 font-bold text-white bg-transparent border-blue-400 outline-none border-2"
      />
    </div>
  )
}
