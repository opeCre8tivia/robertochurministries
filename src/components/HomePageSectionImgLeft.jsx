import React from 'react'
import BlockquoteComponent from './BlockquoteComponent'

const HomePageSectionImgLeft = () => {
  return (
    <div className='w-full h-[500px] md:flex md:h-[350px]'>
        <div className='w-full h-[350px]  bg-local bg-no-repeat bg-contain md:bg-cover bg-origin-border bg-center' style={{backgroundImage:"url('./sudan1.jpeg')"}}>
           {/* <img src="./sudan1.jpeg" className='w-full h-full' /> */}
        </div>

        <div className='w-full h-[150px] md:h-[350px]'>
        <div className="p-4 text-ellipsis max-h-[100px] md:max-h-[300px]">
        {/* <a href="#" className="block mt-1 text-lg text-center leading-tight font-medium text-black hover:underline">THE SUDAN MISSION</a> */}
        <div className="mt-2 text-slate-500 text-ellipsis overflow-hidden h-[100px] md:h-full">

          <BlockquoteComponent>  
            <p> He said to them, “Go into all the world and preach the gospel to all creation. 16 Whoever believes and is baptized will be saved, but whoever does not believe will be condemned.</p>
          </BlockquoteComponent>
          <p> In obidience to masters command Bishop Robert Ochur travels throught his country and many other nations in evanglistic and descipleship missionary journeys. Preaching that there is no other name given to men in heaven and on earth that saves</p>
            <p>And we have witnessed many being brought to Christ through his ministry</p>
        </div>
       </div>



        </div>

    </div>
  )
}

export default HomePageSectionImgLeft