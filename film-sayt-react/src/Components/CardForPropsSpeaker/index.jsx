import React from 'react'
import "./index.css"
function CardSpeacker({name,position}) {
  return (
   

<div className="card-speacker">
  <div className="content-speak">
    <h5 className="tit-speack">{name}</h5>
    <p className="text-speack">{position}</p></div>
</div>

   
  )
}

export default CardSpeacker