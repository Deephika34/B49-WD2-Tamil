import React from 'react'

function Card({priceCard}) {
    // console.log(priceCard);
  return <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{priceCard.title}</h5>
      <h6 className="card-price text-center">${priceCard.price}<span className="period">/month</span></h6>
      <hr/>
      <ul className="fa-ul">
        <li className={priceCard.isUser?"":"text-muted"}><span className="fa-li"><i className={priceCard.isUser?"fas fa-check":"fas fa-times"}></i></span>{priceCard.title==="FREE"?priceCard.user:<b>{priceCard.user}</b>}</li>
        <li className={priceCard.isStorage?"":"text-muted"}><span className="fa-li"><i className={priceCard.isStorage?"fas fa-check":"fas fa-times"}></i></span>{priceCard.storage}</li>
        <li className={priceCard.isPublicprojects?"":"text-muted"}><span className="fa-li"><i className={priceCard.isPublicprojects?"fas fa-check":"fas fa-times"}></i></span>{priceCard.publicprojects}</li>
        <li className={priceCard.isAccess?"":"text-muted"}><span className="fa-li"><i className={priceCard.isAccess?"fas fa-check":"fas fa-times"}></i></span>{priceCard.access}</li>
        <li className={priceCard.isPrivateprojects?"":"text-muted"}><span className="fa-li"><i className={priceCard.isPrivateprojects?"fas fa-check":"fas fa-times"}></i></span>{priceCard.privateprojects}</li>
        <li className={priceCard.isPhone?"":"text-muted"}><span className="fa-li"><i className={priceCard.isPhone?"fas fa-check":"fas fa-times"}></i></span>{priceCard.phone}</li>
        <li className={priceCard.isSubdomain?"":"text-muted"}><span className="fa-li"><i className={priceCard.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{priceCard.title==="PRO"?<><b>Unlimited</b> {priceCard.subdomain}</>:priceCard.subdomain}</li>
        <li className={priceCard.isStatus?"":"text-muted"}><span className="fa-li"><i className={priceCard.isStatus?"fas fa-check":"fas fa-times"}></i></span>{priceCard.status}</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default Card