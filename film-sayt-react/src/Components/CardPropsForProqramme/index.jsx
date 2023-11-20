import React from 'react'
import "./index.css"

function CardProqramme({data,title,time}) {
  return (
   

<div className="proqram-card">
    <span className="may">{data}</span>
    <h5 className="proqram-title">{title}</h5>
    <span className="proqram-time">{time}</span>
    <div className="have-info">
    <div className="view">
    <a className="view-more" href="">View More<i class="fa-solid fa-arrow-right-long"></i></a></div>
    <div className="btnp">
  <a href="">Get Tickets</a>
</div>
</div>
</div>

   
  )
}

export default CardProqramme