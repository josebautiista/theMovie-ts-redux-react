import './App.css'
import { Button } from './atoms/Button'
import { CoverMovie } from './atoms/CoverMovie'
import { InputSearch } from './atoms/InputSearch'
import { Input } from './atoms/input'

function App (): JSX.Element {
  return (
    <div className="w-full">
      <CoverMovie image="https://image.tmdb.org/t/p/original//pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg" title="title" />
      <InputSearch placeholder="Placeholder" onChange={() => {}} />
      <Input
        type="password"
        placeholder="Placeholder"
        onChange={() => {}}
        name="name"
        value="hola"
      />
      <Button text="Button" onClick={() => {}} />
    </div>
  )
}

export default App
