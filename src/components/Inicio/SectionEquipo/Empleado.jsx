import React from 'react'

const Empleado = ({ id, Nombre, Rol, Descripcion }) => {
  return (
    <div className='bg-white-opacity-custom mb-3 p-6 flex flex-col items-center rounded-md md:flex-row'>
      <div className='w-2/5'>
        <img src={`./images/${Nombre}.png`} className='rounded-full' alt="miembro" />
      </div>
      <div className='w-3/5 mt-3'>
        <h4>{Nombre}</h4>
        <h5>{Rol}</h5>
        <p>{Descripcion}</p>
      </div>
    </div>
  )
}

export default Empleado