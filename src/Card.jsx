import React, { useEffect, useState } from "react";
import "./App.css";
import img1 from "./Assets/img1.jpg";
import img2 from "./Assets/img2.jpg";
const Card = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[term,setTerm]=useState('flowers')
  const API_KEY = "39797559-a55cdcc862ddc7ba222a7970f";
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${term}&per_page=200&image_type=photo&pretty=true`;
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const org_response = await response.json();
      setIsLoading(false);
      setImages(org_response.hits);
      
    };
    fetchApi();
  }, []);
  console.log(images);
  return (
    <div className="main_container">
    <div className="main">
        <h1 className="heading">Image Gallery</h1>
        </div>
     {
      images.map((image=>{
        
        return (
          <div className="cards_main" key={images.id} >
        <div className="cards">
          <div className="image">
            <img src={image.webformatURL} alt="image" className="img" />
          </div>
          <div className="card_text">
            <p>Views<span> {image.views}</span></p> 
            <p>Downloads <span>{image.views}</span></p>
            <p>Comments <span> {image.comments}</span></p>
          </div>
        </div>
      </div>
   
        )
      }))
    }
    
    </div>
  );
};

export default Card;
