import React from 'react'
import ThemeButton from './ThemeButton'

const HomePageSectionImgRight = () => {
  return (
    <div className='w-full h-[500px] md:flex md:h-[350px]'>
       
        <div className='w-full h-[150px] md:h-[350px]'>
        <div className="p-4 text-ellipsis max-h-[100px] md:max-h-[300px]">
        <a href="#" className="block mt-1 text-lg text-center leading-tight font-medium text-black hover:underline">THE PAKISTAN MISSION</a>
        <p className="mt-2 text-slate-500 text-ellipsis overflow-hidden h-[100px] md:h-full">
          Bishop Robert was invited to Pakistan to do descipleship and everngelism for one month.Sharing the good news and demostrating the power of God to people of Sialkot Punjab

        </p>
       </div>

       {/* <ThemeButton title="MORE" /> */}
        </div>


        <div className='w-full h-[350px]  bg-local bg-no-repeat bg-contain md:bg-cover bg-origin-border bg-center' style={{backgroundImage:"url('./sudan1.jpeg')"}}>
           {/* <img src="./sudan1.jpeg" className='w-full h-full' /> */}
        </div>


    </div>
  )
}

export default HomePageSectionImgRight