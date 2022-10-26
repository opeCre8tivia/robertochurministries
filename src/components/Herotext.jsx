import Image from 'next/image'
import React from 'react'

const Herotext = () => {
  return (

    <div className='w-full  h-[200px] absolute bottom-4 sm:h-full flex flex-col justify-center align-middle p-10'>

        <div className='text-center'>
             <h1 className='text-[30px] sm:text-[40px] text-white md:text-black font-bold '>
                Demonstrating the works of God 
             </h1>
        </div>

        <div className="text-center text-[20px] text-white md:text-black font-medium mt-4 relative " > 
               in christ Jesus
               <div className='absolute top-0 left-[30%] z-[-6]'>
                   <Image src="/brush.png" width={200} height={40}   />
               </div>
        </div>

    </div>
  )
}

export default Herotext