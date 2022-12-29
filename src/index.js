import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Provider } from "react-redux";
import { store } from "./service";
import Texture from "./Texture";


const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 5, 20],
      }}
      
    >
      <Scene />
    </Canvas>
    <Texture />
  </Provider>
);
