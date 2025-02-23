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
      </li>
      <Link to="/">Home</Link>
      
        <li>
          <Link to="/Sale">Sale</Link>
    
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>

      

      </ul>
   </nav>
   <div className={styles.shopping
   }>
<CartIcon />
</div>

   </header>
   </div>
  )
}

export default Header;