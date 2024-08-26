import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Inicio from './components/Inicio/Inicio'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div className='p-5'>
        <Routes>
          <Route path='/' element={<Inicio />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
