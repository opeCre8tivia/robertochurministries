import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Nav.module.css"


const Logo = ({logoStyles}) => {
  return (
    <div className={styles.logo} style={logoStyles}>
               <Image src="/rblogo.png" height={400} width={400} />
    </div>
  )
}

export default Logo