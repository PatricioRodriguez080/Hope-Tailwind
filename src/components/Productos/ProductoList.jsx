import React from 'react'
import Producto from './Producto'

const ProductoList = ({ productos, categoriaSelecionada }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 gap-6 justify-items-center'>
            {productos.map((producto) => (
                <Producto key={producto.id} {...producto} categoriaSelecionada={categoriaSelecionada} />
            ))}
        </div>
    )
}

export default ProductoList