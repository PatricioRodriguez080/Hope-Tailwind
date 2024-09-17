import React from 'react'
import Producto from './Producto'

const ProductoList = ({ productos }) => {
    return (
        <div>
            {productos.map((producto) => (
                <Producto key={producto.id}  {...producto} />
            ))}
        </div>
    )
}

export default ProductoList