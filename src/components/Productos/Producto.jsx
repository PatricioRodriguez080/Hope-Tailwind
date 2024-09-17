import React from 'react'

const Producto = ({ Nombre, Descripcion }) => {
    return (
        <div>
            <h1>{Nombre}</h1>
            <h2>{Descripcion}</h2>
        </div>
    )
}

export default Producto