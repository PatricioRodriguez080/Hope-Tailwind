import React from 'react'
import Empleado from './Empleado'

const EmpleadoList = ({ empleados }) => {
  return (
    <>
      {empleados.map(empleado => (
        <Empleado key={empleado.id} {...empleado} />
      ))}
    </>
  )
}

export default EmpleadoList