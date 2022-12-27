import {
  useMatcapTexture,
  Center,
  Text3D,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const material = new THREE.MeshMatcapMaterial();

export default function Experience() {

  const donuts = useRef([]);
  const matcapTexture = new THREE.TextureLoader().load('7B5254_E9DCC7_B19986_C8AC91-256px.png')
  // console.log(donutTexture)
  // const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);
  useFrame((state, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  const imageUrl = useSelector((state) => state.imageUrl); 
  const texture = new THREE.TextureLoader().load(imageUrl);
  console.log(texture)

  // Set the texture properties
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;



  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;  

  }, []);

  return (
    <>
      {/* <Perf position="top-left" /> */}

      <OrbitControls makeDefault />

      <Center>
        <Text3D
          material={material}
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position-x={4}
        >
          TRY IT!
        </Text3D>

        {texture ? (<mesh>
          <planeGeometry args={[7, 3.5]} />
          <meshBasicMaterial color='white' map={texture ? texture : new THREE.Texture()} />
        </mesh>) : null}
      </Center>


      {[...Array(100)].map((value, index) => (
        <mesh
          ref={(element) => (donuts.current[index] = element)}
          key={index}
          geometry={torusGeometry}
          material={material}
          position={[
            Math.cos(-(Math.random() * Math.PI * 2)) * (10 + Math.random() * 2),
            (Math.random() - 0.4) * 10,
            Math.sin(-(Math.random() * Math.PI * 2)) * (10 + Math.random() * 2),
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          <torusGeometry args={[1, 0.6, 16, 32]} />
        </mesh>
      ))}
    </>
  );
}
