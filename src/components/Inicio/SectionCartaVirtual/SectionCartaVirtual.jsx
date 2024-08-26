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
    <div>
      <h2 className='text-center'>Carta virtual</h2>
      {categorias.map(categoria => (
        <Menu key={categoria} categoria={categoria} />
      ))}
    </div>
  )
}

export default SectionCartaVirtual