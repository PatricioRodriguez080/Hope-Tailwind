import React from 'react'

const Empleado = ({ id, Nombre, Rol, Descripcion }) => {
  return (
    <div className='bg-white-opacity-custom mb-3 p-6 flex flex-col items-center rounded-md lg:flex-row'>
      <div className='w-2/5'>
        <img src={`./images/${Nombre}.png`} className='rounded-full lg:max-w-32 lg:max-h-32 lg:m-auto' alt="miembro" />
      </div>
      <div className='w-3/5 mt-3 lg:text-start'>
        <h4 className='text-2xl text-black mb-1'>{Nombre}</h4>
        <h5 className='text-xl text-[#1F1F1F] mb-1'>{Rol}</h5>
        <p className='text-[#333333]'>{Descripcion}</p>
        <div className='mt-2 text-marron-200'>
          <i className="fa-brands fa-instagram mr-3"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  )
}

export default Empleado