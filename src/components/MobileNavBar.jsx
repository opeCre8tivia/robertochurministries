/**
 * responsive mobile nav bar
 */
import {useState} from 'react'
import CloseIcon from './CloseIcon'
import Humberger from "./Humberger"
import Logo from "./Logo"

const MobileNav = ()=>{

  const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="fixed z-50 w-full h-auto">
        <div className="w-full h-[60px] flex  items-center justify-between  bg-white" >
            <Logo logoStyles={{width:"40px",height:"40px",margin:"10px"}}/>

            {
                showMenu === false ? <Humberger onClick={()=> setShowMenu(true)}/> : <CloseIcon onClick={()=> setShowMenu(false)} /> 
            }
        </div>

       {
         showMenu === true ?  <div className="w-full h-[80vh] min-h-[80vh] fixed  z-50 bg-white">
           
         </div> : null
       }

        </div>
    )
}

export default MobileNav