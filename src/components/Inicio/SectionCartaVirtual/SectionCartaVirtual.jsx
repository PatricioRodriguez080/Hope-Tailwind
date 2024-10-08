import React from 'react'
import Menu from './Menu'

const SectionCartaVirtual = () => {
  const categorias = [
    "Cafe",
    "Tortas",
    "Salado",
    "Masas"
  ]

  return (
    <section id='productos' className='mt-10'>
      <h2 className='text-center font-custom text-5xl'>Carta virtual</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {categorias.map(categoria => (
          <Menu key={categoria} categoria={categoria} />
        ))}
      </div>
    </section>
  )
}

export default SectionCartaVirtual