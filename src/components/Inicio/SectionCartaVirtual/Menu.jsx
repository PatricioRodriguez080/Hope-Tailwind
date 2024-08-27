import React from 'react'

const Menu = ({ categoria }) => {
  return (
    <div className='mt-5 flex flex-col items-center justify-center'>
       <img src={`./images/${categoria}-productos.jpg`} className='w-48 h-48 rounded-full' alt="menu" />
       <p>{categoria}</p>
    </div>
  )
}

export default Menu