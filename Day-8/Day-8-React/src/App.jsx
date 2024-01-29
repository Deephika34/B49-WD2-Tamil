import { useRef, useState } from 'react'
import './App.css'
import Home from './Home'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Cart_Home_Page from './Cart_Home_Page';
import { Context_Api } from './Context-Api';
import Data from "./ProductDeatails.json"



function App() {
const [cartCount,setCartCount]=useState(0)
const [filterData,setFilterData]=useState([]);
const cardData=Data[0].products;

  return (
    <>
    <Context_Api.Provider value={{cartCount,setCartCount,filterData,setFilterData,cardData}}>
    <Router>
     <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/Cart-Home' element={<Cart_Home_Page/>}></Route>
     </Routes>
     </Router>
    </Context_Api.Provider>
    
    </>
  )
}

export default App