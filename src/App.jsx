import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Inicio from './components/Inicio/Inicio'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
