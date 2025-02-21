import {Routes, Route} from "react-router-dom";
import {Layout} from "../Layout/";



function Router(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={}/>


      </Route>
    </Routes>

    </>
  )
}