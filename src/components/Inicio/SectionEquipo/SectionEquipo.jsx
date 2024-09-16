import React from 'react'
import WaveEquipo from './WaveEquipo'
import EmpleadoListContainer from './EmpleadoListContainer'
import Empleado from './Empleado'

const SectionEquipo = () => {

  return (
    <section id='equipo'>
      <div className='relative bg-marron-200'>
        <WaveEquipo />
        <div className='bg-marron-200 text-center text-white'>
          <h2 className='font-custom text-5xl'>Equipo</h2>
          <h3 className='font-custom text-2xl mb-10'>Te presentamos a nuestro equipo</h3>
          <EmpleadoListContainer />
        </div>
      </div>
    </section>
  )
}

export default SectionEquipo