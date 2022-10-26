/**
 * resposive nav bar for wide screens
 */
import styles from "../../styles/Nav.module.css"
import Logo from "./Logo"
import NavLinkItem from "./NavLinkItem"

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
            
           <Logo/>
            <div className={styles.nav_text}> 
                <div className={styles.org_title}> ROBERT OCHUR</div>
                <div className={styles.org_description}> MINISTRIES </div>
            </div>

         </div>

         {/* menu items */}
         <div className={styles.menu_item_container}>
             {
                links && links.map((link)=>(
                   <NavLinkItem  title={link.title}/>
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