import Cart from "../Cart/";
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
        <li>
          <Link to="/Sale">Sale</Link>
    
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>

      </li>

      </ul>
   </nav>
<Cart/>

   </header>
   </div>
  )
}

export default Header;