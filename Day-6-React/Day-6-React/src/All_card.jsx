import React from 'react'

function Create_card({title,content}) {
  return (
<>
<div className="col mb-5 text-center ">

  <div className="con card mx-0 shadow  bg-body-tertiary " style={{width: "22rem",height:"18rem"}}   >
  
  <div className="card-body">
    <h5 className="card-title text-start">{title}</h5>
    <p className="card-text text-start">{content}</p>
    <p style={{color:"green"}} className='read text-start '>Read More {'>>'}</p>

  </div>
  <div className="card-footer text-body-secondary">
  <span className='px-1' >1 days ago</span><span className='px-1'>- No Comments</span>

  </div>
</div>
</div>


</>

  )
}

export default Create_card