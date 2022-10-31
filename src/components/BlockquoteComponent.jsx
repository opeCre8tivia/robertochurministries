import React from 'react'

const BlockquoteComponent = ({children}) => {
  return (
    <div className='w-full h-auto relative'>
       <div className='w-full flex justify-start text-[30px] text-amber-500 font-serif ' >"</div>    
          {children}
        <div className='w-full flex justify-end text-[30px] text-amber-500 font-serif'>"</div> 
    </div>
  )
}

export default BlockquoteComponent