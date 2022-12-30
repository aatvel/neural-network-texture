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
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense } from "react";
import Junior from "./Junior";
import { Fog } from "three";
import { Model } from "./Liquid";

const material = new THREE.MeshMatcapMaterial();

export default function Scene() {
  const floorTextute = new THREE.TextureLoader().load("floor.png");

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <OrbitControls makeDefault />

      <Environment preset="forest" />

      <Center position={[0, 1.5, 0]}>
        <Suspense>
          <Float
            rotationIntensity={0.75}
            floatIntensity={(0, 5)}
            floatingRange={[0.2, 0.2]}
          >
            <Junior scale={0.55} rotation={[0, Math.PI / 6, 0]} />
            <Model scale={0.55} rotation={[0, Math.PI / 6, 0]} />
          </Float>
        </Suspense>
      </Center>

      <mesh position-y={-3.25} position-z={-5} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[10, 100]}
          resolution={1024}
          mixBlur={0.6}
          mixStrength={40}
          depthScale={1}
          minDepthThreshold={0.2}
          color="#090009"
          metalness={0.8}
          roughness={0.899}
        />
      </mesh>
    </>
  );
}
