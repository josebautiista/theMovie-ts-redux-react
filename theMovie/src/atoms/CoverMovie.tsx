interface Props {
  image: string
  title: string
}

export const CoverMovie: React.FC<Props> = ({ image, title }) => {
  return (
        <div className="w-44 h-60 md:w-48">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-t-xl"
            />
        </div>
  )
}
