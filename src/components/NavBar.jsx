/**
 * resposive nav bar for wide screens
 */

import Image from "next/image"
import styles from "../../styles/Nav.module.css"

const NavBar =()=>{

   const links = [
      {
        title:"Home",
        uri:"/"
      },
      {
        title:"Ministry",
        uri:"/ministry"
      },
      {
        title:"Mission",
        uri:"/mission"
      },
      {
        title:"Partner",
        uri:"/partner"
      },
      {
        title:"Store",
        uri:"/store"
      }

   ]


    return (
        <div className={styles.navContainer}>
         {/* logo */}
         <div className={styles.logo_container}>
            <div className={styles.logo}>
               <Image src="/rblogo.png" height={400} width={400} />
            </div>

            <div className={styles.nav_text}> 
                <div className={styles.org_title}> ROBERT OCHUR</div>
                <div className={styles.org_description}> MINISTIRES </div>
            </div>
         </div>

         {/* menu items */}
         <div className={styles.menu_item_container}>
            {
                links && links.map((link)=>(
                    <div className={styles.menu_item}>{ link.title} </div>
                ))
            }

          <div className={styles.donate_btn}>
             DONATE
          </div>
         </div>

        </div>
    )
}


export default NavBar