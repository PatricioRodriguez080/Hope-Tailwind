import React from 'react'

const Cliente = ({ Nombre, Opinion }) => {
  return (
    <div className='bg-white-opacity-custom p-8 h-80 rounded-[30px] max-h-64'>
      <div className='flex items-center'>
        <img src="./images/google.webp" className='min-w-20 p-px rounded-[50%] mr-5 border-solid border-[5px] border-marron-300' alt="cliente" />
        <div>
          <h3 className='text-2xl text-black'>{Nombre}</h3>
          <span className='text-xl text-[#1F1F1F]'>Cliente</span>
        </div>
      </div>
      <div className='mt-5 text-[#333333]'>
        <p>{Opinion}</p>
      </div>
      <div className='mt-4'>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
    </div>
  )
}

export default Cliente