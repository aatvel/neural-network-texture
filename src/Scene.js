import { Center, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Perf } from "r3f-perf";
import React, { useRef } from "react";
import Junior from "./Junior";
import { Liquid } from "./Liquid";
import Floor from "./Floor";


export default function Scene() {

  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 4, 20],
        }}
      >
        <OrbitControls makeDefault />
        <Environment preset="forest" />

    
        <directionalLight position={[1.9, 0, - 1.3]} color={'magenta'} />
        <directionalLight position={[-2.9, 0, - 2]} color={'orange'}  />
        {/* <directionalLight position={[0, 0, 2]} color={'#fffff0'} intensity={0.3} />
        <directionalLight position={[0, 2, 1.2]} color={'#fffaf0'} intensity={0.3} /> */}
        <Center position={[0, 1.5, 0]}>
          <Suspense>
            <Junior scale={0.55} rotation={[0, Math.PI / 6, 0]} />
            <Liquid scale={0.55} rotation={[0, Math.PI / 6, 0]} />
            <Floor />
          </Suspense>
        </Center>
        <Perf position="top-left" />
      </Canvas>
    </>
  );
}
