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
          <h2>Equipo</h2>
          <h3>Te presentamos a nuestro equipo</h3>
          <EmpleadoListContainer />
        </div>
      </div>
    </section>
  )
}

export default SectionEquipo