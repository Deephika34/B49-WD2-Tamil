import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Create_cards from './Create_cards'
import All_data from '../db.json'



function Fsd() {
 const [fsd,setFsd]=useState(All_data.fsd)
  

  return (
<>
<div className="container ">
          <nav className="navbar">
            <div className='img '>
              <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png" alt="logo" />
            </div>
            <div> <button className='btn dropbtn rounded-3'>COURSES</button></div>
            <div className='dropdown'>
              <button className="btn dropbtn rounded-3">LIVE CLASSES</button>
              <div className="dropdown-content">
                <a href="#" style={{color:"gray"}}>ZEN CLASS<span style={{paddingLeft:"5px"}} className='cir'>O</span><span style={{color:"red"}}>Live Online Classes</span>
                <p>LIVE Online Intensive Program + 100% Placement Support</p></a>
                <a href="#">Full Stack Development Program (FSD)
                <p>Learn Javascript, HTML, CSS, Java, Data Structure, MongoDB & more</p></a>
                <a href="#">IIT-M Advanced Programming & Data Science Program
                <p>Learn Python, Machine Learning, NLP, Tableau, PowerBI & more</p></a>
                <a href="#">Automation & Testing Program
                <p>Learn Selenium, Python, Java, Jenkins, Jmeter, API Testing & more</p></a>
                <a href="#" style={{color:"#0dba4b"}}>Explore More Programs
                <p></p></a>
                </div>
                </div>
              <div className='dropdown'>
              <button className="btn dropbtn rounded-3">PRACTICE</button>
              <div className="dropdown-content">
                <a href="#">CODEKATA
                <p>Sharpen your coding skills, prepare for interviews</p></a>
                <a href="#">WEBKATA
                <p>Build basic Frontend and Backend development skills</p></a>
                <a href="#">IDE - Online Compiler
                <p>Run & test your code in any programming language</p></a>
               </div>
               </div>

              <div className='dropdown'>
              <button className="btn dropbtn rounded-3">RESOURCES</button>
              <div className="dropdown-content">
               <a href="#">REWARDS</a>
                <a href="#">REFERRAL</a>
                <a href="#">FORUM SUPPORT</a>
                <a href="#">BLOGS</a>
             
              </div>
              </div>
              <div className='dropdown'>
              <button className="btn dropbtn rounded-3">OUR PRODUCTS</button>
              <div className="dropdown-content">
                <a href='#'>HackerKid
                <p>Coding classes platform for K-12 children</p></a>
                <a href='#'>GUVI for Corporates
                <p>Meet your hiring needs at ease</p></a>
             
              </div>
              </div>

            
          </nav>
          </div>
     


         <div  className="container-fluid d-flex justify-content-center" style={{maxWidth:"100%",backgroundImage:"url('http://blog.guvi.in/wp-content/uploads/2022/04/Blog-heading.jpg')",height:"350px"}}>
         <div className='container d-flex flex-column justify-content-center align-items-start ' >
          
        <h1 className="elementor-heading-title elementor-size-default p-3">Full Stack Development</h1>
        <p className='p-3 text-start'>Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!</p>
        <p className='p-3 text-start'>The GUVI Blog's Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>
    </div>
</div>
        
 
         <div>    
          <ol className='list d-flexp5'>
                <Link className='btn btn-light mx-2' to={'/'}>All</Link>
                <Link className='btn btn-light mx-2' >FULL STACK DEVELOPMENT</Link>
                <Link className='btn btn-light mx-2' to={'/Data'}>DATA SCIENCE</Link>
                <Link className='btn btn-light mx-2' to={'/cyber'}>CYBER SECURITY</Link>
                <Link className='btn btn-light mx-2' to={'/carrer'}>CAREER</Link>
            </ol>
            </div>
            <div className="container px-2  mt-4">
            <div className="row  row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center ">
{
  fsd.map((item,index)=>(<Create_cards key={item.id} {...item} />))
}
            </div>
            </div>
 
 
</>
    )
}

export default Fsd