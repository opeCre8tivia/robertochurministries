import Head from 'next/head'
import Image from 'next/image'
import DividerSection from '../src/components/DividerSection'
import HeroImage from '../src/components/HeroImage'
import Herotext from '../src/components/Herotext'
import HomePageSectionImgLeft from '../src/components/HomePageSectionImgLeft'
import HomePageSectionImgRight from '../src/components/HomePageSectionImgRight'
import MobileNav from '../src/components/MobileNavBar'
import NavBar from '../src/components/NavBar'
import SectionTitle from '../src/components/SectionTitle'
import ThemeButton from '../src/components/ThemeButton'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robert & Jacent Ochur</title>
        <meta name="description" content="Robert Ochur ministries | proclaiming the gospel and demostrating the power of God " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

       {/* nav section */}
        <div className={styles.wide_nav_bar}>
          <NavBar />
        </div>
        <div className={styles.mobile_nav_bar}>
          <MobileNav />
        </div>

        {/* hero section */}
        <div className="w-full min-h-[70vh] max-h-[70vh] relative md:min-h-[90vh] md:max-h-[90vh] md:grid md:grid-cols-2 gap-2 overflow-hidden bg-no-repeat bg-cover " style={{backgroundImage:"url('./bg.jpeg')"}}>

          {/* extream background image */}
          {/* <img src="/bg.jpeg" className='w-full h-[70vh] sm:h-auto -z-40 absolute top-0 right-0' /> */}
          
          <div className='w-full h-full absolute top-0 left-0 right-0 flex flex-col justify-center align-middle z-40 md:relative md:flex md:justify-center md:align-middle'>
                <Herotext/>    
          </div>

          {/* translucent cover */}
          <div className='absolute w-full h-full z-30 bg-black opacity-40 md:hidden'>
            
          </div>

          <div className='w-full h-full md:max-h-[90vh] block md:flex md:justify-center md:align-middle'>
              <HeroImage />
          </div>

        </div>

        {/* missions */}
         <SectionTitle title="Missions" />
         <HomePageSectionImgLeft/>

         {/* bible study section div */}
        <DividerSection imageUrl="/biblestudy.jpg">

          <div className='w-full md:min-w-[50%] md:max-w-[50%]  text-white'>
              <h1 className='text-[40px] text-center '>
                 TRANSFORMING LIVES
              </h1>

              <h5 className="text-center">
                by the
              </h5>

              <h1 className='text-[40px] text-center'>
                WORD OF GOD
              </h1>

          </div>

          <div className='w-full md:min-w-[50%] md:max-w-[50%]  flex flex-col justify-center items-center'>
            <h4 className='text-[20px] text-white text-center'>
             Join our online bible study classes
            </h4> 

            <ThemeButton title="COMING SOON" styles={{width:"40%"}} />
          </div>

        </DividerSection>


         {/* upcoming */}
         <SectionTitle title="Upcoming" />
         <HomePageSectionImgRight/>

         {/* buy book section  */}
        <DividerSection imageUrl="/bookbg.jpg">

        <div className='w-full md:min-w-[50%] md:max-w-[50%]  flex flex-col justify-center items-center'>
          <h4 className='text-[20px] text-white text-center'>
            Join our online bible study classes 
          </h4> 

        </div>



        <div className='w-full flex flex-col items-center md:min-w-[50%] md:max-w-[50%]  text-white'>
            <h1 className='text-[40px] text-center '>
              THE DISCLOSURE
            </h1>

            <h5 className="text-center">
              Written by Bsp Robert, the book exposes the  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </h5>


             <ThemeButton title="GET YOUR COPY TODAY" styles={{width:"auto"}} />

        </div>

       

</DividerSection>


     {/* get involved */}
     <SectionTitle title="Get Involved" />



       
      </main>

      <footer className={styles.footer}>
         <div className={styles.crafted_txt}> hand crafted by</div>
         <div className={styles.footer_co_name}>odavolt</div>
      </footer>
    </div>
  )
}
