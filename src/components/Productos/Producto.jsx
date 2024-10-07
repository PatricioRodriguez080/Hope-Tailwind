import React from 'react'

const Producto = ({ Nombre, Descripcion, categoriaSelecionada }) => {
    return (
        <div className='bg-transparente w-72 min-h-[525px] rounded-[30px] mt-5 hover:bg-white transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={`/images/Productos/${categoriaSelecionada}/${Nombre}.jpg`} className='w-full h-auto max-h-[270px] rounded-[30px] p-5' alt={Nombre} />
            <div className='text-center px-5'>
                <h2 className='font-custom text-xl'>{Nombre}</h2>
                <h3 className='text-[#333333]'>{Descripcion}</h3>
            </div>
        </div>
    )
}

export default Producto