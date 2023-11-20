import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.css"
import CardSpeacker from '../CardForPropsSpeaker';
function CardForSpeacker() {
    const [data, setData] = useState([]);
            const baseUrl = "http://localhost:3000/speakers"
    
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
    
       <div className="speacker-cards"> 
        {
     (data && data.map((item) => 
     
     <CardSpeacker name={item.name} position={item.position} />

   
               ))
               }
   </div>

    </>
  )
}

export default CardForSpeacker