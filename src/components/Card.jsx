import React from 'react'

function Card({cardData}) {
  // const {cardData}=props object destructing
  return <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{cardData.plan}</h5>
      <h6 className="card-price text-center">${cardData.price}<span className="period">/month</span></h6>
      <hr/>
      <ul className="fa-ul">
        <li className={cardData.isuser?"":"text-muted"}><span className="fa-li"><i className={cardData.isuser?"fas fa-check":"fas fa-times"}></i></span>{cardData.plan!=="FREE"?<b>{cardData.user}</b>:<>{cardData.user}</>}</li>
        <li className={cardData.isstorage?"":"text-muted"} ><span className="fa-li"><i className={cardData.isstorage?"fas fa-check":"fas fa-times"}></i></span>{cardData.storage}</li>
        <li className={cardData.ispublicProjects?"":"text-muted"}><span className="fa-li"><i className={cardData.ispublicProjects?"fas fa-check":"fas fa-times"}></i></span>{cardData.publicProjects}</li>
        <li className={cardData.iscommunityAccess?"":"text-muted"}><span className="fa-li"><i className={cardData.iscommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{cardData.communityAccess}</li>
        <li className={cardData.isprivateProjects?"":"text-muted"}><span className="fa-li"><i className={cardData.isprivateProjects?"fas fa-check":"fas fa-times"}></i></span>{cardData.privateProjects}</li>
        <li className={cardData.isphoneSupport?"":"text-muted"}><span className="fa-li"><i className={cardData.isphoneSupport?"fas fa-check":"fas fa-times"}></i></span>{cardData.phoneSupport}</li>
        <li className={cardData.isfreeSubdomain?"":"text-muted"}><span className="fa-li"><i className={cardData.isfreeSubdomain?"fas fa-check":"fas fa-times"}></i></span>{cardData.plan=="PRO"?<><b>Unlimited</b> {cardData.freeSubdomain}</>:cardData.freeSubdomain}</li>
        <li className={cardData.isreports?"":"text-muted"}><span className="fa-li"><i className={cardData.isreports?"fas fa-check":"fas fa-times"}></i></span>{cardData.reports}</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default Card