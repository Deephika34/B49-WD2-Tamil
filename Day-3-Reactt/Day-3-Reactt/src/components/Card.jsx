import React,{useState} from 'react'

function Card({cart,setCart,product}) {
  console.log(product)
    let [toggle,setToggle]=useState(true)
      return <div class="col mb-5">
      <div class="card h-100">         
         <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{product.sale}</div>         
          <img class="card-img-top" src={product.image} alt="..." />         
          <div class="card-body p-4">
              <div class="text-center">                
                  <h5 class="fw-bolder">{product.name}</h5>                
                 {product?.reviews?(<> <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      </div>
                      </>):("")}                  
                    {product?.orginal?(<>    
                    <div><span className="text-muted text-decoration-line-through">{product.orginalprice}</span>
                    {product.price}</div>
                   </>):(product.price)
                  }
                  </div>
                  </div>
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {
            toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
            setCart(cart+1)
            setToggle(false)
            }}> 
          Add to cart
          </button>:
          <button className="btn btn-outline-dark mt-auto" onClick={()=>{
             setCart(cart-1)
             setToggle(true)
             }}> 
             Remove from Cart
             </button>
            }
          </div>
      </div>
  </div>
</div>
}

export default Card