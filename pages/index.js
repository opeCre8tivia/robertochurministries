import Head from 'next/head'
import Image from 'next/image'
import HeroImage from '../src/components/HeroImage'
import Herotext from '../src/components/Herotext'
import MobileNav from '../src/components/MobileNavBar'
import NavBar from '../src/components/NavBar'
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
        <div className="w-full min-h-[80vh] grid grid-cols-2 gap-2">

          <div className='flex justify-center align-middle'>
                <Herotext/>
          </div>

          <div className='flex justify-center align-middle'>
              <HeroImage />
          </div>

        </div>
       
      </main>

      <footer className={styles.footer}>
         <div className={styles.crafted_txt}> hand crafted by</div>
         <div className={styles.footer_co_name}>odavolt</div>
      </footer>
    </div>
  )
}
