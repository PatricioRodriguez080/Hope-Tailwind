import React from 'react'
import VideoPresentacion from './VideoPresentacion'
import TextoPresentacion from './TextoPresentacion'
import WavePresentacion from './WavePresentacion'

const SectionPresentacion = () => {
  return (
    <section className='relative h-[60vh]'>
        <div className='absolute w-full h-full bg-black-opacity-custom flex justify-center items-center'>
            <VideoPresentacion />
            <TextoPresentacion />
            <WavePresentacion />
        </div>
    </section>
  )
}

export default SectionPresentacion