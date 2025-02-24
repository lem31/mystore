
import FetchProducts from '../../../API/api';


function Home(){
  return (
    <div>
<h1>Check Out Our Latest Products Below!</h1>
<h2>OR GO STRAIGHT TO OUR SALE</h2>
<button>SALE</button>

<h3>PURCHASE SOME OF OUR HOTTEST ITEMS BEFORE THEY SELL OUT!</h3>


<FetchProducts/>

<div></div>
    </div>
  )
}


export default Home;