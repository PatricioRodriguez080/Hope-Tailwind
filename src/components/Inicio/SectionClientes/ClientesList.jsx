import React from 'react'
import Cliente from './Cliente'

const ClientesList = ({ clientes }) => {
  return (
    <>
      {clientes.map(cliente => (
        <h2>{cliente.Nombre}</h2>
      ))}
    </>
  )
}

export default ClientesList