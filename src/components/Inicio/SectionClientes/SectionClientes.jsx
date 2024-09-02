import React from 'react'
import ClientesListContainer from './ClientesListContainer'

const SectionClientes = () => {


    return (
        <div className='bg-marron-200'>
            <h2 className='font-custom text-5xl text-white text-center'>Nuestros clientes</h2>
            <ClientesListContainer />
        </div>
    )
}

export default SectionClientes