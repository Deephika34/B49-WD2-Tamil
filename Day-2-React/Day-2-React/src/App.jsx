import React from 'react'
import Card from "./components/Card"

function App() {

  let priceCard=[{
    title:"FREE",
    price:"0",
    user:"Single User",
    isUser:true,
    storage:"5GB Storage",
    isStorage:true,
    publicprojects:"Unlimited Public Projects",
    isPublicprojects:true,
    access:"Community Access",
    isAccess:true,
    privateprojects:"Unlimited Private Projects",
    isPrivateprojects:false,
    phone:"Dedicated Phone Support",
    isPhone:false,
    subdomain:"Free Subdomain",
    isSubdomain:false,
    status:"Monthly Status Reports",
    isStatus:false},

    {title:"PLUS",
    price:"9",
    user:"5 Users",
    isUser:true,
    storage:"50GB Storage",
    isStorage:true,
    publicprojects:"Unlimited Public Projects",
    isPublicprojects:true,
    access:"Community Access",
    isAccess:true,
    privateprojects:"Unlimited Private Projects",
    isPrivateprojects:true,
    phone:"Dedicated Phone Support",
    isPhone:true,
    subdomain:"Free Subdomain",
    isSubdomain:true,
    status:"Monthly Status Reports",
    isStatus:false},

    {title:"PRO",
    price:"49",
    user:"Unlimited Users",
    isUser:true,
    storage:"150GB Storage",
    isStorage:true,
    publicprojects:"Unlimited Public Projects",
    isPublicprojects:true,
    access:"Community Access",
    isAccess:true,
    privateprojects:"Unlimited Private Projects",
    isPrivateprojects:true,
    phone:"Dedicated Phone Support",
    isPhone:true,
    subdomain:"Free Subdomains",
    isSubdomain:true,
    status:"Monthly Status Reports",
    isStatus:true}]
  return<>
  <section className="pricing py-5">
  <div className="container">
  <div className="row">
      {
        priceCard.map((e,i)=>{
          return   <Card priceCard={e}key={i}/>
              })
      }
  </div>
  </div>
  </section>
       </>
    }
      export default App

             