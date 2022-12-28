import "./interface.css";
import * as THREE from 'three';
import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import { useDispatch, useSelector } from 'react-redux';
import { downloadImage, generateImage, generatePicture, main } from "./service";


export default function Dalle(){
  const dispatch = useDispatch();
  const [prompt, setPrompt] = useState("");
  const [texture, setTexture] = useState(null);
  const [loading, setLoading] = useState(false);

  const textureLoader = new THREE.TextureLoader();

  const [placeholder, setPlaceholder] = useState(
    "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
  );

  const handleGenerateImage = () => {
    // dispatch(downloadImage(prompt));
    setLoading(setTimeout(() => {}, 50000))
  };

  useEffect(() => {

  }, []);

  const imageUrl = useSelector((state) => state.imageUrl);
 
  return (
    <>
    <div className="app-main">
      {loading ? (
        <>
          <h2>Generating..Please Wait..</h2>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <>
          <h2>Generate an Image using Open AI API</h2>

          
          {imageUrl.length > 0 ? (
         
              null
            // <img className="result-image" src={imageUrl} alt="result"  />
          ) : (
            <><textarea
            className="app-input"
            placeholder={placeholder}
            onChange={(e) => setPrompt(e.target.value)}
            rows="10"
            cols="40"
          />
          <button className="button-create " onClick={handleGenerateImage}>Generate an Image</button></>
          )}
        </>
      )}
    </div>
    </>
  );
}