import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Inicio } from './pages/Inicio'
import { useSelector } from 'react-redux'
import './App.css'

function App (): JSX.Element {
  const token = useSelector((state: any) => state.token.token)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={token !== null ? <Inicio /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
