import React from 'react'

const SkeletonProductos = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 gap-6 justify-items-center'>
            {[...Array(6)].map((_, index) => (
                <div key={index} className='bg-gray-200 w-72 min-h-[525px] rounded-[30px] mt-5 animate-pulse'>
                    <div className='w-full h-[270px] bg-gray-300 rounded-[30px] p-5'></div>
                    <div className='text-center px-5'>
                        <div className='h-6 bg-gray-300 rounded w-3/4 mx-auto mt-4'></div>
                        <div className='h-4 bg-gray-300 rounded w-1/2 mx-auto mt-2'></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkeletonProductos