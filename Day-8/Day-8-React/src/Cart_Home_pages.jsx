import React, { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'
import { Context_Api } from './Context-Api';
import Cart_Card from './Cart_Card';

function Cart_Home_Page() {
 const {filterData,cartCount}=useContext(Context_Api)
    const navitage=useNavigate();

    

  return (
    <div className='container-fluid'>
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" style={{height:"90px"}}>
<div className="container-fluid">
 <a className="navbar-brand" href="#">Navbar scroll</a>
 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse"  id="navbarScroll">
   <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
     <li className="nav-item">
       <a className="nav-link active" aria-current="page" href="#">Home</a>
     </li>
     <li className="nav-item">
       <a className="nav-link" href="#">About</a>
     </li>
     <li className="nav-item dropdown">
       <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Shop
       </a>
       <ul className="dropdown-menu">
         <li><a className="dropdown-item" href="#">Dress</a></li>
         <li><a className="dropdown-item" href="#">Electronics</a></li>
         <li><hr className="dropdown-divider"/></li>
         <li><a className="dropdown-item" href="#">Furniture</a></li>
       </ul>
     </li>
     
   </ul>


   <button onClick={()=>(navitage(-1))} type="button" className="btn btn-warning btn-1 text-center d-flex align-items-center btn-outline-dark align-items-center" >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      BACK TO SHOP
      <span  className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
      </button>
    
 </div>
</div>
</nav>
<br />
<div className='container-fluid p-5 ' style={{backgroundColor:"black",color:"white"}}>
 <h1 className='mb-4'>ONLINE SHOPPING</h1>
 <h5 style={{color:"gray"}}>Order this Items With shop CartPage template</h5>
</div>

<div className='container-fluid d-flex justify-content-center'>
<div className="container m-5  p-3">
    
        {filterData&&filterData.map((items,index)=>(<Cart_Card key={items.id} index={index} {...items}/>))}
     
     </div>
</div>
</div>
  )
}

export default Cart_Home_Page