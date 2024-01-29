import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Create_cards from './Create_cards';
import All_data from '../db.json'


function Cyber_secu() {

const [cyber,setCyber]=useState(All_data.cyber_sec);


useEffect(()=>{

  axios.get('http://localhost:3030/cyber_sec')
  .then((res)=>{setCyber(res.data)}).catch(err=>console.log(err))
},[])
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
         
         <div className="container-fluid" style={{height:"350px",maxWidth:"100%"}}>
         <h2 className='position-absolute' style={{top:300,left:800,opacity:0.5}}><i>CYBER SECURITY</i></h2>
         <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-scaled.webp" alt="CYBER SECURITY" 
        style={{height:"320px",maxWidth:"100%"}} />

         </div>
     
 
         <div>    
          <ol className='list d-flex  p5'>
                <Link className='btn btn-info mx-2' to={'/'}>ALL</Link>
                <Link className='btn btn-info mx-2' to={'/fsd'}>FULL STACK DEVELOPMENT</Link>
                <Link className='btn btn-info mx-2' to={'/Data'}>DATA SCIENCE</Link>
                <Link className='btn btn-info mx-2'>CYBER SECURITY</Link>
                <Link className='btn btn-info mx-2' to={'/carrer'}>CAREER</Link>  
            </ol>
            </div>
            <div className="container px-2  mt-4">
            <div className="row  row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center ">
{
  cyber.map((item,index)=>(<Create_cards key={item.id} {...item} />))
}
            </div>
            </div>
 




</>

    )
}

export default Cyber_secu