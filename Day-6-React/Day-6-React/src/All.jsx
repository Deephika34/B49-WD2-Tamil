import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import All_card from './All_card'
import All_data from '../db.json'


function All() {

  const [all,setAll]=useState(All_data.all)
  return (
    <>
 <div className="container ">
          <nav className="navbar sticky-top">
            <div className='img '>
              <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png" alt="logo" />
            </div>
            <div> <button className='dropbtn rounded-3'>COURSES</button></div>
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
         
         
   
         <div className="container-fluid d-flex align-items-center" style={{height:"350px",maxWidth:"100%"}}>
         <img src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png" style={{height:"250px",maxWidth:"100%"}} />

     
         </div>

        <div>    
          <ol className='list d-flex p5'>
                <Link className='btn btn-success mx-2' to={'/'} >ALL</Link>
                <Link className='btn btn-success mx-2' to={'/fsd'}>FULL STACK DEVELOPMENT</Link>
                <Link className='btn btn-success mx-2' to={'/Data'}>DATA SCIENCE</Link>
                <Link className='btn btn-success mx-2' to={'/cyber'}>CYBER SECURITY</Link>
                <Link className='btn btn-success mx-2' to={'/carrer'}>CAREER</Link>
            </ol>
            </div>
            <div className="container px-2  mt-4">
            <div className="row  row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center ">
{
  all&&all.map((item,index)=>(<All_card key={item.id} {...item} index={index}/>))
}
            </div>
            </div>
            <div className="container-fluid py-5" style={{backgroundColor:"ActiveCaption"}}>
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


    </>
  )
}

export default All