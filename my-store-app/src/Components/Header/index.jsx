import CartIcon from "../Cart/Cart_Icon";
import {Link} from "react-router-dom";
import styles from "../../CSS_Modules/Header/header.module.css";
import gStyles from "../../CSS_Modules/Global_Styles/global_styles.module.css";



function Header(){
  return(
    <div>
     

   <header className={styles.header}>
    <p className={styles.logo} >
     <span className={styles.logo_easy}>Easy</span> <span className={styles.logo_buy}>Buy</span>
    </p>
    <div className={styles.nav_div}>
   <nav className={styles.nav} >
    <ul>
      <li >
      <Link className={styles.link} to="/">Home</Link>
      </li>
    
      
        <li>
          <Link className={styles.link} to="/Sale">Sale</Link>
    
        </li>
        <li>
          <Link className={styles.link} to="/About">About</Link>
        </li>
        <li>
          <Link className={styles.link} to="/Contact">Contact</Link>
        </li>

      

      </ul>
   </nav>
   </div>
   <div className={styles.bag
   }>
<CartIcon />
</div>

   </header>
   </div>
  )
}

export default Header;