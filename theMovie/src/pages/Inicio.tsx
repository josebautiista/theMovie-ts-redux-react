import { Hero } from '../components/Hero'

export const Inicio: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
        <Hero />
        <div className="w-full flex items-center justify-center flex-col gap-2 max-w-7xl my-0 mx-auto">
            <h2 className="text-3xl font-bold text-white">Iniciando...</h2>
        </div>
    </div>
  )
}
