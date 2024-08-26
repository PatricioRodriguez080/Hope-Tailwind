import React from 'react'
import SectionPresentacion from './SectionPresentacion/SectionPresentacion'
import SectionServicios from './SectionServicios/SectionServicios'
import SectionCartaVirtual from './SectionCartaVirtual/SectionCartaVirtual'

const Inicio = () => {
  return (
    <>
      <SectionPresentacion />
      <div className='bg-custom-gradient'>
        <SectionServicios />
        <SectionCartaVirtual />
      </div>
    </>
  )
}

export default Inicio