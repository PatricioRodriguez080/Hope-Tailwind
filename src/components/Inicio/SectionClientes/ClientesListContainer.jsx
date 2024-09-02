import React from 'react'
import ClientesList from './ClientesList'

const ClientesListContainer = () => {
  const clientes = [
    {
      Nombre: "Maria Florencia",
      Opinion: "No deja de entrar la gente, el café es riquísimo y la pastelería ni hablar. Es mi nuevo lugar favorito" 
    },
    {
      Nombre: "Facundo",
      Opinion: "Muy buen lugar, los panificados son una maravilla, las medialunas son ricas, pero las croissant rellenas están a otro nivel."
    },
    {
      Nombre: "Lara Mantaras",
      Opinion: "La mejor panadería que probé en mi vida! Las tortas son riquísimas y el lugar es súper cuidado. Lo recomiendo!"
    }
  ]

  return (
    <div>
      <ClientesList clientes={clientes} />
    </div>
  )
}

export default ClientesListContainer