import React from 'react'

export const CardRecomendados = () => {
    return (
        <div className='container w-[220px] h-[310px] flex flex-col items-center justify-start pt-[10px] gap-3'>
            <div className='w-[200px] h-[200px] flex items-center justify-center'>
                <img className='w-[95%] h-[95%] ' src="https://m.media-amazon.com/images/I/61h1JmIy4UL._AC_SX679_.jpg" alt="producto" />
            </div>
            <div>
                <h4>$99.99</h4>
                <p className='w-[186px] h-[53px] text-gray-500 text-base font-medium overflow-hidden'>
                    detalles del producto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis.
                </p>
            </div>
        </div>
    )
}
