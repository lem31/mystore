import CartIcon from "../Cart/cart_icon";
import {Link} from "react-router-dom";
import styles from "../../CSS_Modules/Header/header.module.css";

function Header(){
  return(
    <div>
   <header className={styles.header}>

    <p className={styles.logo} >
      EasyBuy
    </p>
   <nav className={styles.nav}>
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
   <div className={styles.bag
   }>
<CartIcon />
</div>

   </header>
   </div>
  )
}

export default Header;