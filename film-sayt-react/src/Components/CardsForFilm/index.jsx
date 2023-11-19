import React, { useEffect, useState } from 'react'
import axios from "axios"
import CardFilm from '../CardPropsFilms';
import "./index.css"
function CardForFilm() {
    const [data, setData] = useState([]);
            const baseUrl = "http://localhost:3000/filmcards"
    
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
        <div className="cards"> 
        {
     (data && data.map((item) => 
     
     <CardFilm image={item.image} title={item.title} price={item.price}  />

   
               ))
               }
   </div>

    </>
  )
}

export default CardForFilm