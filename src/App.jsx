import React from 'react'
import Card from './components/Card'

function App() {
  let cardDetails=[
    {
     plan:"FREE",
     price:"0",
     user:"Single User",
     isuser:true,
     storage:"5GB Storage",
     isstorage:true,
     publicProjects:"Unlimited Public Projects",
     ispublicProjects:true,
     communityAccess:"Community Access",
     iscommunityAccess:true,
     privateProjects:"Unlimited Private Projects",
     isprivateProjects:false,
     phoneSupport:"Dedicated Phone Support",
     isphoneSupport:false,
     freeSubdomain:"Free Subdomain",
     isfreeSubdomain:false,
     reports:"Monthly Status Reports",
     isreports:false
     },
    {
      plan:"PLUS",
      price:"9",
      user:"5 Users",
      isuser:true,
      storage:"50GB Storage",
      isstorage:true,
      publicProjects:"Unlimited Public Projects",
      ispublicProjects:true,
      communityAccess:"Community Access",
      iscommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isprivateProjects:true,
      phoneSupport:"Dedicated Phone Support",
      isphoneSupport:true,
      freeSubdomain:"Free Subdomain",
      isfreeSubdomain:true,
      reports:"Monthly Status Reports",
      isreports:false
     },
     {
      plan:"PRO",
      price:"49",
      user:"Unlimited User",
      isuser:true,
      storage:"150 GB Storage",
      isstorage:true,
      publicProjects:"Unlimited Public Projects",
      ispublicProjects:true,
      communityAccess:"Community Access",
      iscommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isprivateProjects:true,
      phoneSupport:"Dedicated Phone Support",
      isphoneSupport:true,
      freeSubdomain:"Free Subdomains",
      isfreeSubdomain:true,
      reports:"Monthly Status Reports",
      isreports:true
     }]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
      cardDetails.map((e,i)=>
      {
        return <Card cardData={e} key={i}/>
      })
     }
      
    </div>
  </div>
</section>
</>
}

export default App