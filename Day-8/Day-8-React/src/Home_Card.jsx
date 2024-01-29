import React, {useContext,} from 'react'
import { Context_Api } from './Context-Api';


function Card({id,title,index,thumbnail,description,price,brand,category}) {
const {cardData,filterData,setFilterData,cartCount,setCartCount}=useContext(Context_Api)

function buy(){
  alert("order placed!!! Track you Product shipping details")
}

function add(){
cardData.filter((ele,ind)=>{
  if(ind==index){
    setFilterData([...filterData,ele])
 setCartCount(cartCount+1)
  }
 
})  }


  return (
    <div className="col mb-5"> 
    <div className="card h-100 w-10 border border-3 border-info rounded" style={{backgroundColor:"beige"}}>
    <div className="badge bg-dark text-white position-absolute border border-info " style={{top: "0.5rem" , right: "0.5rem"}}>Sale</div>
                                                            
    <div className="img">  
             <img className="card-img-top" src={thumbnail} style={{width:"100%",height:"350px"}} alt="..."/></div>
    <div className="card-body p-2 d-flex justify-content-center">
    <div className="d-flex flex-column align-items-center justify-content-center">
              <h4 className="text-center">{title}</h4>
             <h4 className="text-center" style={{color:"blue"}}>PRICE :$ {price} /-</h4>   
             <p className="text-center">{description}</p> 
                <h4 className="text-center">{brand}-{category}</h4>
            
                
    </div>
    </div>
    <div className="card-footer pt-0 border-top-0 bg-transparent">


    <div className="d-flex justify-content-around ">
<button  className="btn btn-success mt-auto " onClick={()=>add()}>

  +Add to Cart</button> 
<button  className="btn btn-info mt-auto " onClick={()=>buy()}>
  
  Buy Now !!!</button> 
    </div>


    </div>
    </div>
    </div>
  )
}

export default Card