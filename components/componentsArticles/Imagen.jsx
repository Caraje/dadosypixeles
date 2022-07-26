import Image from 'next/image'
import React from 'react'

const Imagen = ({img, alt}) => {
  return (
    <div className='contentImg'>
      <Image 
        src={`https://res.cloudinary.com/www-dados-pixeles-com/image/upload/${img}`}
        alt={alt} 
        objectFit='scale-down'
        layout="fill"
      />

    </div>
  )
}

export default Imagen