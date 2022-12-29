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

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const material = new THREE.MeshMatcapMaterial();

export default function Scene() {
  const donuts = useRef([]);
  const matcapTexture = new THREE.TextureLoader().load(
    "7B5254_E9DCC7_B19986_C8AC91-256px.png"
  );

  const floorTextute = new THREE.TextureLoader().load("floor.png");

  useFrame((state, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  const imageUrl = useSelector((state) => state.imageUrl);
  const texture = new THREE.TextureLoader().load(imageUrl);

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  return (
    <>
      {/* <Perf position="top-left" /> */}
      {/* <OrbitControls makeDefault /> */}

      <Environment preset="forest" />

      <Center position={[0, 1.5, 0]}>
        <Suspense>
          <Float
            rotationIntensity={0.5}
            floatIntensity={(0, 5)}
            floatingRange={[0.2, 0.2]}
          >
            <Junior scale={0.55} rotation={[0, Math.PI / 6, 0]} />
          </Float>
        </Suspense>
      </Center>

      <mesh position-y={-2} position-z={-5} rotation={[-Math.PI / 2, 0, 0]}>
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
