import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.css"
import CardProqramme from '../CardPropsForProqramme';
function CardForProqramme() {
    const [data, setData] = useState([]);
            const baseUrl = "http://localhost:3000/proqramme"
    
            const datalar = async () => {
                try {
                    const response = await axios(baseUrl)
    
                    setData(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
            
        useEffect(() => {
    
    datalar()
            
        }, [])
  return (
    <>
    <div className="fest">Festival Proqramme</div>
       <div className="proqram-cards"> 
        {
     (data && data.map((item) => 
     
     <CardProqramme data={item.data} title={item.title} time={item.time}  />

   
               ))
               }
   </div>

    </>
  )
}

export default CardForProqramme