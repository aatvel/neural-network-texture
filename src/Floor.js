import React from "react";
import { MeshReflectorMaterial } from "@react-three/drei";

const Floor = () => {
  return (
    <mesh position-y={-3.25} position-z={-5} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[300, 30]}
        resolution={1024}
        mixBlur={1}
        mixStrength={80}
        depthScale={1.9}
        minDepthThreshold={0.1}
        color="#090009"
        metalness={0.8}
        roughness={0.9}
      />
    </mesh>
  );
};

export default Floor;
