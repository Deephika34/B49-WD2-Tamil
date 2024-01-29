import React from 'react'

function Create_cards({title,content,img}) {
  return (
    <>
<div className="col mb-5 text-center ">
<div className="card" style={{width: "22rem",height:"27rem"}}>
  <img src={img} className="card-img-top rounded-2" alt="..." style={{height:"10rem"}}/>
  <div className="card-body pb-0">
    <h5 className="card-title text-start"> {title}</h5>
    <p className="card-text text-start">{ content}</p>
    <p style={{color:"green"}} className='read text-start text-start mb-0'>Read More {'>>'}</p>

  </div>
  <div className="card-footer text-body-secondary">
  <span className='px-1' >1 days ago</span><span className='px-1'>- No Comments</span>

  </div>
</div>
</div>
    
    </>
  )
}

export default Create_cards