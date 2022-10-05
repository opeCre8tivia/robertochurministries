import React from 'react'
import {FiAlignJustify} from 'react-icons/fi'

const Humberger = ({onClick}) => {
  return (
    <div className='w-[40px] h-[40px] flex items-center justify-center p-2 mx-4' onClick={onClick}>
        <FiAlignJustify size={30} style={{fontWeight:"bold"}}/>
    </div>
  )
}

export default Humberger