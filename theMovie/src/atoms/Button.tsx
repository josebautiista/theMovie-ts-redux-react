interface Props {
  text: string
}

export const Button: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <button
        className="w-full h-12 rounded bg-blue-400 text-white font-bold "
        style={{ boxShadow: '0 8px 0px 0px #0784c5' }}
      >
        {text}
      </button>
    </div>
  )
}
