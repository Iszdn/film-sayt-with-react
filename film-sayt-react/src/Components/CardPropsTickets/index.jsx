import React from 'react'
import "./index.css"
function CardTicket({day,type,price,description}) {
  return (
    <div className="tickets-card">
        <div className="days">
            <h5 className="title-day">{day}</h5>
            <p className="type-tick">Type: {type}</p>
            <p className="price-tick">Price: ${price}</p>
            <p className="price-desc">*{description}</p>
        </div>
        <div className="buy-tick">
            <div className="cirkle"></div>
            <span className="buy">Buy<i class="fa-solid fa-arrow-right-long"></i></span>
        </div>
    </div>
  )
}

export default CardTicket