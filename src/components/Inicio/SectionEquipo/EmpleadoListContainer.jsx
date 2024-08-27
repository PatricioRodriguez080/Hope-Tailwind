import React from 'react'
import EmpleadoList from './EmpleadoList'

const EmpleadoListContainer = () => {
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
    <div className='grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:px-28'>
      <EmpleadoList  empleados={empleados} />
    </div>
  )
}

export default EmpleadoListContainer