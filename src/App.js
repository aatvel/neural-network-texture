import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Provider } from "react-redux";
import { store } from "./service";
import Texture from "./Texture";

import React from "react";

const App = () => {
  return (
    <>
      <Scene />
      <Texture />
    </>
  );
};

export default App;
