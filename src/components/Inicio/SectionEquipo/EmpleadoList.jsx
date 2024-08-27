import React from 'react'
import Empleado from './Empleado'

const EmpleadoList = ({ empleados }) => {
  return (
    <>
      {empleados.map(empleado => (
        <Empleado {...empleado} />
      ))}
    </>
  )
}

export default EmpleadoList