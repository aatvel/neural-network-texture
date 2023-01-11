import * as THREE from "three";
import { Center, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import React, { Suspense } from "react";

import Floor from "./Floor";
import { Model } from "./Model";
import { Head } from "./Head";

THREE.ColorManagement.legacyMode = false

export default function Scene() {

  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 12, 20],
        }}
      >
        <OrbitControls makeDefault />
        <Environment preset="forest" blur={0.8} />

    
        <directionalLight position={[1.9, 0, - 1.3]} color={'magenta'} />
        <directionalLight position={[-2.9, 0, - 2]} color={'orange'}  />
        <directionalLight position={[0, 0, 2]} color={'#fffff0'} intensity={0.3} />
        <directionalLight position={[0, 2, 1.2]} color={'#fffaf0'} intensity={0.3} />
        <Center position={[0, 1.5, 0]}>
          <Suspense>
            <Model scale={0.65} />
            <Head scale={0.65} />
            <Floor />
          </Suspense>
        </Center>
        <Perf position="top-left" />
      </Canvas>
    </>
  );
}
