import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Pagination, Autoplay } from 'swiper/modules'
import Cliente from './Cliente'

const ClientesList = ({ clientes }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        932: {
          slidesPerView: 2,
        },
      }}
    >
      {clientes.map(cliente => (
        <SwiperSlide key={cliente.id} className='h-[350px]'>
          <Cliente {...cliente} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ClientesList