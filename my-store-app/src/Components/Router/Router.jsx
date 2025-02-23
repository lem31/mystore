import {Routes, Route} from "react-router-dom";
import Layout from "../Layout/layout";
import Home from "../Pages/Home/Home";
import Sale from "../Pages/Sale/Sale";
import Product from "../Pages/Product/Product";
import MyCart from '../Cart/cart';



function Router(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path= "/Sale" element={<Sale/>}/>
      <Route path= "/Product/:id" element ={<Product/>}/>
      <Route path= "/MyCart" element ={<MyCart/>}/>
      {/* <Route path= "/Sale" element={}/>
      <Route path= "/About" element={}/>
      <Route path= "/Contact" element ={}/>
      <Route path= "/Product/:id" element ={}/>
      <Route path= "/MyCart" element ={}/>
      <Route path= "/Checkout" element ={}/>
      <Route path= "/CheckoutSuccess" element = {}/> */}


      </Route>
    </Routes>

    </>
  )
}

export default Router;