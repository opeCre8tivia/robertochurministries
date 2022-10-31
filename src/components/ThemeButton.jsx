import React from 'react'

const ThemeButton = ({title,onClick,styles}) => {
  return (
    <button
       onClick={onClick} 
       className='min-w-[150px] bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded' style={styles}>
      {title}
   </button>
  )
}

export default ThemeButton