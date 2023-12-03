import { IoMdCloseCircle } from 'react-icons/io'

export const NotFound: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2">
      <h2 className="text-3xl font-bold text-white">Not Found</h2>
      <IoMdCloseCircle className="text-4xl text-white" />
    </div>
  )
}
