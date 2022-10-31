import React from 'react'

const DividerSection = ({children,imageUrl}) => {
  return (
    <div style={{backgroundImage:(`url(${imageUrl})`)}} className='w-full min-h-[350px] mt-1 mb-1 px-8 py-4 flex flex-col md:flex md:flex-row items-center justify-between bg-no-repeat bg-fixed bg-origin-content bg-orange-600' >
      {children}
    </div>
  )
}

export default DividerSection