import CartIcon from "../Cart/cart_icon";
import {Link} from "react-router-dom";


function Header(){
  return(
    <div>
   <header>

    <p>
      EasyBuy
    </p>
   <nav>
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
<CartIcon/>

   </header>
   </div>
  )
}

export default Header;