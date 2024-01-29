import React, { useContext } from 'react'
import { useState } from 'react'
import { Context_Api } from './Context-Api'

function Cart_Card({id,title,description,brand,category,price,thumbnail,index,stock}) {
let [count,setCount]=useState(1)

const {filterData,setFilterData,cartCount,setCartCount}=useContext(Context_Api)

const remove2=()=>{
  if(cartCount>0){
    setCartCount(cartCount-1)}
  let deleted=filterData.filter((item,ind)=>(ind!=index));
  alert("DO YOU WANT TO REMOVE THIS ITEM")
  setFilterData(deleted);
  
  }

  return (
    <div>
        <div className="row border rounded-3 border-info border-2 my-5">
            <div className="col-lg-4 gx-2 h-25  p-3">
            <img className="card-img-top border rounded-3" src={thumbnail} alt="..."/>

            </div>
            <div className="col-lg-5 gx-2 h-25  p-3">
                <strong>{title}</strong>
                <p>{description}</p>
                <h4>{brand}-{category}</h4>
               <p style={{color:"red"}}>Stock Available :<span className=' rounded' style={{color:"yellow",background:"black"}}>{stock-count}</span> Nos</p>

            </div>
            <div className="col-lg-3 gx-2 h-25  p-3">
                <div className="d-flex justify-content-around align-items-center">
                <input type="number"value={count}  minLength="0" maxLength={stock} step='1' onChange={(e)=>setCount(e.target.value)} className='input d-flex w-25  '/>
                <div className='d-flex '>
                    <button className='btn p-1 m-0 w-50 'onClick={()=>{
                       count<stock&&  filterData.filter((item,ind)=>{
                    if(ind==index){
                      setCount(count+1);
                     
                    }})
                      }}>+</button>
                    <button  className='btn p-1 m-0 w-50'onClick={()=>count>1&&setCount(count-1)}>-</button>
                </div>
                 <b>{price}.00 /-</b>
                </div>
                <br /><br /> <br /> <br />
               
                <br />
                <div className="d-flex justify-content-evenly">
                <button type="button" onClick={()=>{alert("!!! ORDER PLACED SUCCESSFULLY....")}} className="btn btn-success">Buy NOW !!!</button>
                <button type="button" onClick={remove2} className="btn btn-danger">Remove From Cart</button>

                </div>

            </div>
            <hr />
          <div className="d-flex justify-content-between p-3">
            <h5>SUBTOTAL :</h5>
            <h5>$ {price*count}.00/-</h5>
          </div>
          <div className="d-flex justify-content-between p-3">
          <h5>SHIPPING :</h5>
            <h5>{150}.00 /-</h5>
          </div>
          <hr />
          <div className="d-flex border rounded-3 justify-content-between p-3" style={{backgroundColor:"rgb(16, 175, 175)"}}>
          <h5 className='total'>TOTAL :</h5>
            <h5 className='total'>${price*count+150}.00 /--</h5>
            </div>
            </div>
    
    <hr />
    </div>
  )
}

export default Cart_Card