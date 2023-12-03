import { AiOutlineLoading } from 'react-icons/ai'

export const Loading: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-2">
      <h2 className="text-3xl font-bold text-white">Loading...</h2>
      <AiOutlineLoading className="animate-spin text-4xl text-white" />
    </div>
  )
}
