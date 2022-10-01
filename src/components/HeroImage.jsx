import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
    <div className='w-full h-full flex justify-center align-middle'>
         <Image src="/roberttwo.png" width={500} height={400}/>
    </div>
  )
}

export default HeroImage