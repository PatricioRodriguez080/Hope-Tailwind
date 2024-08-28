import React from 'react'

const SectionServicios = () => {
  return (
    <section id='servicios'>
      <div className='grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2'>
        <div className='order-1 m-5 md:m-10'>
          <p>Bienvenidos a Hope, donde el arte de la fermentación natural cobra vida. Somos amantes apasionados del pan y del café de especialidad. En cada masa, honramos la tradición con nuestra masa madre, creando productos que reflejan la autenticidad y el sabor inigualable.</p>
        </div>
        <img src="./images/cafe-con-amigos.svg" className='w-48 m-auto order-2' alt="cafe con amigos" />

        <div className='order-3 m-5 md:order-4 md:m-10'>
          <p>En nuestra panadería, no solo ofrecemos productos excepcionales, sino también una variedad de servicios diseñados para enriquecer tu experiencia. Desde el primer momento en que entrás, te sumerges en un mundo donde el arte de la fermentación natural y el aroma embriagador del café se fusionan para crear un ambiente único.</p>
        </div>
        <img src="./images/barista.svg" className='w-48 m-auto order-4 md:order-3' alt="cafe con amigos" />
      </div>
    </section>
  )
}

export default SectionServicios
