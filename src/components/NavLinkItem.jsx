import React, { useRef } from 'react'
import styles from "../../styles/Nav.module.css"

const NavLinkItem = ({title}) => {
  
 let decorRef = useRef()

  const handleHoverEffect =(e)=>{
      decorRef.current.style.display = "block"
     
  }

  const handleMouseLeave=(e)=>{
    decorRef.current.style.display = "none"
  }

  return (
    <div 
       className={styles.menu_item_cont} 
       onMouseOver={(e)=>handleHoverEffect(e)}
       onMouseLeave={(e)=> handleMouseLeave(e)}
        >

        <div 
            className={styles.menu_item}
            >
            {title}
        </div> 

         <div 
         ref={decorRef}
        className={styles.menu_item_decor}>
        </div>    
     
    </div>
   
  )
}

export default NavLinkItem