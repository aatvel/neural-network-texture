import "./style.css";
import * as THREE from "three";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadImage } from "./service";

export default function Texture() {
  const dispatch = useDispatch();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const [placeholder, setPlaceholder] = useState(
    "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
  );

  const handleGenerateImage = () => {
    setLoading(true);
    dispatch(downloadImage(prompt));
    setTimeout(() => {
      setLoading(false);
    }, 51000);
  };

  useEffect(() => {}, []);

  const imageUrl = useSelector((state) => state.imageUrl);

  return (
    <div className="app-main">
      {loading ? (
        <>
          <h2>Generating.. Please Wait..</h2>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <>
     
            <>
              <textarea
                className="app-input"
                placeholder={placeholder}
                onChange={(e) => setPrompt(e.target.value)}
                rows="10"
                cols="40"
              />
              <button className="button-create " onClick={handleGenerateImage}>
                Generate an Image
              </button>
            </>
          
        </>
      )}
    </div>
  );
}
