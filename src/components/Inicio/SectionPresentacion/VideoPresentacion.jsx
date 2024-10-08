import React from 'react'

const VideoPresentacion = () => {
    return (
        <div className='absolute top-0 left-0 -z-20 w-full h-full overflow-hidden'>
            <video src='./images/video-inicio.mp4' className='w-full h-full object-cover' autoPlay muted loop />
        </div>
    )
}

export default VideoPresentacion