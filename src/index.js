import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";
import { Provider } from "react-redux";
import { store } from "./service";
import Dalle from "./Dalle";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, -2, 8],
      }}
    >
      <Experience />
    </Canvas>
    <Dalle />
  </Provider>
);
