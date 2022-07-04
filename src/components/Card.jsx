import './Card.css'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import axios from 'axios'
// import  image  from 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083'


const Card = () => {
    const [characters, setCharacters] = useState({
        quote:
            "Marriage is like a coffin and each kid is another nail.",
        character: 'Homer Simpson',
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
        characterDirection: 'Right'
    })
    const [isLoading,setIsLoading] = useState(false);
    const [refreshAPIstate, setrefreshAPIstate] = useState(false);
    const URL = `https://simpsons-quotes-api.herokuapp.com/quotes`;

    useEffect(()=>{
        fetchData();
    }, [refreshAPIstate])

    const fetchData= async()=>{
        try{
                setIsLoading(true)
                let res = await  axios.get(URL) 
                //simulation d'une reponse longue de 1000s
                await setTimeout(() => {
                    console.log(res)
                    setCharacters(res.data[0]);
                    setIsLoading(false);
                }, 800);  
        }    
         catch(error) {
            console.log(error.message)
            setIsLoading(false);
        }finally{
        }
    }
     

    const refreshAPI = (e)=>{
        // console.log("refresh API",e.target)
        setrefreshAPIstate(!refreshAPIstate)
    }

  return (
      <div className="card__header" id="card-name">
          <div className="card__header-container">
              <Button  isLoading={isLoading} refresh={refreshAPI}/>
              <p>{characters.character}</p>
          </div>

          <div className="card__body">
              <div className="card__left ">
                  <img className="opacity" src={characters.image} alt="caracter-simpson" id="card-img" />
              </div>

              <div className="card__right opacity" id="card-citation">
                  <blockquote >{characters.quote}</blockquote>
              </div>
          </div>
      </div>
  )
}

export default Card