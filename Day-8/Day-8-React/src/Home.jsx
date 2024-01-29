import React, { useContext, useState } from 'react'
import Home_card from "./Home_Card"
import { Link } from 'react-router-dom';
import { Context_Api } from './Context-Api';

function Home() {
    const {cardData,cartCount}=useContext(Context_Api)
  return (
    <div className='container-fluid'>
       <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" style={{height:"90px" ,backgroundColor:" darkviolet "}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar scroll</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
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
      <div className='cla'>
      <Link to='/Cart-Home'>
      <button type="button" className="btn btn-warning btn-1 d-flex align-items-center btn-outline-dark " >
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
         </svg>
         GO TO CART
         <span  className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
         </button></Link>
         </div>
    </div>
  </div>
</nav>
<br />
<div className='container-fluid p-5 ' style={{backgroundColor:"black",color:"white"}}>
    <h1 className='mb-4'>ONLINE SHOPPING</h1>
    <h5 style={{color:"gray"}}>With this shop hompeage template</h5>
</div>

<div className="container py-5 px-6 px-lg-1 mt-2 m-0 " style={{backgroundColor:"lightskyblue",maxWidth:"fit-content" }}>
<div className="row gx-8 gx-lg-6 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
     {cardData&&cardData.map((item,index)=>(<Home_card key={item.id} index={index} {...item}/>))}
</div>
</div>

<div className="container-fluid py-5" style={{backgroundColor:"#1d2634",color:"white"}}>
<div className="main-footer d-flex justify-content-around">
            <div className="main-footer-column d-flex flex-column">
                <div className="main-footer-column-header" style={{color:"white"}}>Features</div>
                <br />
               <p className='anco' href="#">Home</p>
               <p className='anco' href="#">Snippets</p>
               <p className='anco' href="#">Wiki</p>
               <p className='anco' href="#">Questions</p>
               <p className='anco' href="#">Findings</p>
            </div>

            <div className="main-footer-column d-flex flex-column">
                <div className="main-footer-column-header" style={{color:"white"}}>About</div>
                <br />
               <p className='anco' href="#">About &amp; Contact</p>
               <p className='anco' href="#">Service Terms</p>
               <p className='anco' href="#">Cookie Policy</p>
               <p className='anco' href="#">Privacy Privacy</p>
               <p className='anco' href="#">GDPR Privacy Policy</p>
               <p className='anco' href="#">Policies</p>
            </div>

            <div className="main-footer-column d-flex flex-column">
                <div className="main-footer-column-header" style={{color:"white"}}>Other</div>
                <br />
               <p className='anco' href="#">Code Formatters</p>
               <p className='anco' href="#">Funny Generators</p>
               <p className='anco' href="#">Post Lists</p>
               <p className='anco' href="#">Social Links</p>
            </div>

        </div>
</div>
    </div>
  )
}

export default Home