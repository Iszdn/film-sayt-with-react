import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.css"
import CardTicket from '../CardPropsTickets';

function CardForTickets() {
    const [datal, setDatal] = useState([]);
            const baseUrl = "http://localhost:3000/tickets"
    
            const datalartick = async () => {
                try {
                    const res = await axios(baseUrl)
    
                    setDatal(res.data);
                } catch (error) {
                    console.log(error);
                }
            }
            
        useEffect(() => {
    
    datalartick()
            
        }, [])
  return (
    <>
        <div className="tickets"> 
        {
     (datal && datal.map((x) => 
     
     <CardTicket day={x.day} type={x.type} price={x.price} description={x.description}  />
   
               ))
               }
   </div>

    </>
  )
}

export default CardForTickets