import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-marron-300 flex flex-col md:flex-row text-white'>
        <div className='flex flex-col mt-4 md:w-1/2'>
          <h3 className='text-center font-custom text-2xl'>Somos Hope!</h3>
          <p className='text-center'>Bienvenidos a Hope, donde el arte de la fermentación natural cobra vida. Somos amantes apasionados del pan y del café de especialidad. En cada masa, honramos la tradición con nuestra masa madre, creando productos que reflejan la autenticidad y el sabor inigualable.</p>
        </div>
        <div className='mt-4 md:w-1/2'>
          <h3 className='text-center font-custom text-2xl'>Redes</h3>
          <div className='flex justify-center mt-1 text-2xl'>
            <a href="https://www.instagram.com/hope.maisondupain/" target="_blank"><i className="fa-brands fa-instagram mr-2 hover:text-marron-100"></i></a>
            <a href="https://www.facebook.com " target="_blank"><i className="fa-brands fa-facebook mr-2 hover:text-marron-100"></i></a>
            <a href="https://www.twitter.com" target="_blank"><i className="fa-brands fa-x-twitter hover:text-marron-100"></i></a>
          </div>
        </div>
      </div>
      <div className='bg-marron-300 text-center text-white text-xl font-custom pt-5'>
        <a href="https://www.linkedin.com/in/patricio-rodriguez-4544662a2/" className='hover:text-marron-100'>©Patricio Rodriguez</a>
      </div>
    </>
  )
}

export default Footer