import React from 'react'
import WaveEquipo from './WaveEquipo'
import Empleado from './Empleado'

const SectionEquipo = () => {
  const empleados = [
    {
      id: 1,
      Nombre: "Julian",
      Rol: "Barista",
      Descripcion: "Su café favorito es el americano, la mayor parte del día está tomando café."
    },
    {
      id: 2,
      Nombre: "Ignacio",
      Rol: "Panadero",
      Descripcion: "Su especialidad es la Danesa y su pasatiempo hacer TikToks con Claudia."
    },
    {
      id: 3,
      Nombre: "Ailen",
      Rol: "Atención al cliente",
      Descripcion: "Tiene un perro salchicha llamado Vienesa, es el alma de la fiesta."
    },
    {
      id: 4,
      Nombre: "Claudia",
      Rol: "Community Manager",
      Descripcion: "Adicta a TikTok. Siempre se aprende todos los bailes virales."
    },
  ]

  return (
    <div className='relative bg-marron-200'>
      <WaveEquipo />
      <div className='bg-marron-200 text-center text-white'>
        <h2>Equipo</h2>
        <h3>Te presentamos a nuestro equipo</h3>
        {empleados.map(empleado => (
          <Empleado key={empleado.id} {...empleado}/>
        ))}
      </div>
    </div>
  )
}

export default SectionEquipo