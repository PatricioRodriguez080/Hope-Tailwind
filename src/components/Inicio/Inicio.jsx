import React from 'react'
import SectionPresentacion from './SectionPresentacion/SectionPresentacion'
import SectionServicios from './SectionServicios/SectionServicios'
import SectionCartaVirtual from './SectionCartaVirtual/SectionCartaVirtual'
import SectionEquipo from './SectionEquipo/SectionEquipo'
import SectionClientes from './SectionClientes/SectionClientes'

const Inicio = () => {
  return (
    <>
      <SectionPresentacion />
      <div className='bg-custom-gradient'>
        <SectionServicios />
        <SectionCartaVirtual />
      </div>
      <SectionEquipo />
      <SectionClientes />
    </>
  )
}

export default Inicio