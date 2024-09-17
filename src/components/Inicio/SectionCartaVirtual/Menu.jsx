import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ categoria }) => {
  return (
    <div className='mt-5 flex flex-col items-center justify-center'>
      <Link to={`/productos/${categoria}`}>
        <img src={`./images/${categoria}-productos.jpg`} className='w-48 h-48 rounded-full cursor-pointer hover:scale-105 transform transition-transform duration-300' alt="menu" />
      </Link>
      <p>{categoria}</p>
    </div >
  )
}

export default Menu