import Head from 'next/head'
import Image from 'next/image'
import HeroImage from '../src/components/HeroImage'
import Herotext from '../src/components/Herotext'
import HomePageSection from '../src/components/HomePageSection'
import MobileNav from '../src/components/MobileNavBar'
import NavBar from '../src/components/NavBar'
import SectionTitle from '../src/components/SectionTitle'
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
        <div className="w-full min-h-[70vh] max-h-[70vh] relative md:min-h-[90vh] md:max-h-[90vh] md:grid md:grid-cols-2 gap-2 overflow-hidden ">
          
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
         <HomePageSection/>
       
      </main>

      <footer className={styles.footer}>
         <div className={styles.crafted_txt}> hand crafted by</div>
         <div className={styles.footer_co_name}>odavolt</div>
      </footer>
    </div>
  )
}
