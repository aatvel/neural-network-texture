import {
  useMatcapTexture,
  Center,
  Float,
  PresentationControls,
  OrbitControls,
  useHelper,
  Environment,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense } from "react";
import Junior from "./Junior";
import { Fog } from "three";
import { Liquid } from "./Liquid";
import Floor from "./Floor";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { Perf } from "r3f-perf";

const material = new THREE.MeshMatcapMaterial();

export default function Scene() {
  const floorTextute = new THREE.TextureLoader().load("floor.png");

  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 10, 15],
        }}
      >
        <OrbitControls makeDefault />
        <Environment preset="forest" />
        <Center position={[0, 1.5, 0]}>
          <Suspense>
            {/* <Float
              rotationIntensity={0.75}
              floatIntensity={(0, 5)}
              floatingRange={[0.2, 0.2]}
            > */}
            <Junior scale={0.55} rotation={[0, Math.PI / 6, 0]} />
            <Liquid scale={0.55} rotation={[0, Math.PI / 6, 0]} />
            {/* </Float> */}
          </Suspense>
        </Center>
        <Perf position="top-left" />
      </Canvas>

      {/* <Floor /> */}
    </>
  );
}
