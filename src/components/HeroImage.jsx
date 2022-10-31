import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
    <div className='w-full h-full flex justify-center items-end'>
         <img src="/robert2.png" className='w-full h-[600px]  md:w-[450px] '/>
         
    </div>
  )
}

export default HeroImage