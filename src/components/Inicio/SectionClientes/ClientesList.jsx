import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Cliente from './Cliente'

const ClientesList = ({ clientes }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {clientes.map(cliente => (
        <SwiperSlide key={cliente.id}>
          <Cliente {...cliente} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ClientesList