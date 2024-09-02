import React from 'react'
import { SwiperSlide } from 'swiper/react'

const Cliente = ({ Nombre, Opinion }) => {
  return (
    <SwiperSlide>
      <h2>{Nombre}</h2>
      <h2>{Opinion}</h2>
    </SwiperSlide>
  )
}

export default Cliente