import React from 'react'
import WaveContacto from './WaveContacto'

const SectionContacto = () => {
    return (
        <section className='bg-maderas-contacto'>
            <WaveContacto />
            <h2 className='text-center font-custom text-5xl text-white'>Contáctanos</h2>
            <div className='flex flex-col w-full justify-around'>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.3212238194924!2d-58.51091962341423!3d-34.69707706243607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccf7ba344efb9%3A0x5551fc0269eb1183!2sMAISON%20DU%20PAIN!5e0!3m2!1ses!2sar!4v1705335603674!5m2!1ses!2sar" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center text-white'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Juncal 29, Tapiales</p>
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-envelope"></i>
                            <p>MaisonDuPain@gmail.com</p>
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-phone"></i>
                            <p>+54 11-5238-3759</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionContacto