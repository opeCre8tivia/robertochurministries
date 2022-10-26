import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='w-full h-[40px]  font-bold text-lg px-6 text-gray-500 flex flex-col items-center justify-center'>
        {title}
        <div className='w-[40%] h-[4px] bg-amber-400'></div>
    </div>
  )
}

export default SectionTitle