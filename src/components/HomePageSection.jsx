import React from 'react'

const HomePageSection = () => {
  return (
    <div className='w-full h-[500px] md:flex md:h-[350px]'>
        <div className='w-full h-[350px]  bg-local bg-no-repeat bg-contain md:bg-cover bg-origin-border bg-center' style={{backgroundImage:"url('./sudan1.jpeg')"}}>
           {/* <img src="./sudan1.jpeg" className='w-full h-full' /> */}
        </div>

        <div className='w-full h-[150px] md:h-[350px]'>
        <div className="p-4 text-ellipsis max-h-[100px] md:max-h-[300px]">
        <a href="#" className="block mt-1 text-lg text-center leading-tight font-medium text-black hover:underline">THE SUDAN MISSION</a>
        <p className="mt-2 text-slate-500 text-ellipsis overflow-hidden h-[100px] md:h-full">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Ac feugiat sed lectus vestibulum mattis. Imperdiet dui accumsan sit amet nulla. Sit amet luctus venenatis lectus magna fringilla urna porttitor. At volutpat diam ut venenatis tellus in. Nibh venenatis cras sed felis eget. Integer quis auctor elit sed vulputate mi sit. Rhoncus mattis rhoncus urna neque viverra justo nec. Sed sed risus pretium quam vulputate dignissim suspendisse in.
        </p>
       </div>



        </div>

    </div>
  )
}

export default HomePageSection