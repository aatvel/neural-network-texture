/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from "three";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSelector } from "react-redux";
import { useControls } from "leva";



export function Head(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/WOBBLEBUG_2.glb");
  const { actions } = useAnimations(animations, group);

  const {x,y, color} = useControls ({
    x: {
      value: 6.8,
      min: 0.5,
      max: 15,
      step: 0.5
    },
    y: {
      value: 6.8,
      min: 0.5,
      max: 15,
      step: 0.5
    },
    color: '#ffffff',
  })

 

  const material = new THREE.MeshPhysicalMaterial({reflectivity: 0.001, metalness: 0.1,  envMapIntensity: 0.5, color: color});
  const { imageUrl } = useSelector((state) => state.imageUrl);
  console.log(imageUrl)
  const texture = new THREE.TextureLoader().load(imageUrl);



  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      actions[key].play();
    });

    material.map = texture
    material.metalnessMap = texture
    material.roughnessMap = texture    
    texture.repeat.set( x ,y )
    texture.wrapS =  THREE.MirroredRepeatWrapping
    texture.wrapT = THREE.MirroredRepeatWrapping

  }, [imageUrl, x, y, color]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="AS_SPHERE_1v_&_M1__s07115_out_object_0"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_SPHERE_1v_&_M1__s07115_out_object_0"].geometry}
          material={materials.metall}
          position={[7.1, 2.97, 2.47]}
          rotation={[-1.72, -0.24, -2.38]}
          scale={0.46}
        />
        <mesh
          name="AS_SPHERE_6v_&_M1__s07115_out_object_1"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_SPHERE_6v_&_M1__s07115_out_object_1"].geometry}
          material={materials.glass}
          position={[3.27, 2.97, 6.77]}
          rotation={[-1.84, -0.06, 3.13]}
          scale={0.56}
        />
        <mesh
          name="AS_SPHERE_6v_&_M1__s07115_out_object_2"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_SPHERE_6v_&_M1__s07115_out_object_2"].geometry}
          material={materials.metall}
          position={[3.27, 2.97, 6.77]}
          rotation={[-1.35, -1, -0.02]}
          scale={0.56}
        />
        <mesh
          name="AS_SPHERE_6v_&_M1__s07115_out_object_3"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_SPHERE_6v_&_M1__s07115_out_object_3"].geometry}
          material={materials.glass}
          position={[-2.47, 2.97, 7.1]}
          rotation={[-1.81, 0.14, 2.37]}
          scale={0.56}
        />
        <mesh
          name="AS_SPHERE_6v_&_M1__s07115_out_object_4"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_SPHERE_6v_&_M1__s07115_out_object_4"].geometry}
          material={materials.metall}
          position={[-2.47, 2.97, 7.1]}
          rotation={[-2.34, -0.74, -1.24]}
          scale={0.56}
        />
        <mesh
          name="AS_SPHERE_1v_&_M1__s07115_out_object_5"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_SPHERE_1v_&_M1__s07115_out_object_5"].geometry}
          material={materials.metall}
          position={[-6.77, 2.97, 3.27]}
          rotation={[-1.64, 0.27, 1.57]}
          scale={0.46}
        />
        <mesh
          name="AS_SPHERE_1v_&_M1__s07115_out_object_6"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_SPHERE_1v_&_M1__s07115_out_object_6"].geometry}
          material={materials.metall}
          position={[-7.1, 2.97, -2.47]}
          rotation={[-1.42, 0.24, 0.76]}
          scale={0.46}
        />
        <mesh
          name="AS_SPHERE_6v_&_M1__s07115_out_object_7"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_SPHERE_6v_&_M1__s07115_out_object_7"].geometry}
          material={materials.glass}
          position={[-3.27, 2.97, -6.77]}
          rotation={[-1.3, 0.06, -0.01]}
          scale={0.56}
        />
        <mesh
          name="AS_SPHERE_6v_&_M1__s07115_out_object_8"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_SPHERE_6v_&_M1__s07115_out_object_8"].geometry}
          material={materials.metall}
          position={[-3.27, 2.97, -6.77]}
          rotation={[-1.79, 1, 3.12]}
          scale={0.56}
        />
        <mesh
          name="AS_SPHERE_7v_&_M1__s07115_out_object_9"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_SPHERE_7v_&_M1__s07115_out_object_9"].geometry}
          material={materials.metall}
          position={[2.47, 2.97, -7.1]}
          rotation={[-0.8, 0.74, 1.9]}
          scale={0.43}
        />
        <mesh
          name="AS_SPHERE_2v_&_M1__s07115_out_object_10"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_SPHERE_2v_&_M1__s07115_out_object_10"].geometry}
          material={materials.metall}
          position={[6.76, 2.97, -3.25]}
          rotation={[0.46, 0.16, -2.22]}
          scale={0.38}
        />
        <mesh
          name="AS_SPHERE_2v_&_M1__s07115_out_object_11"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_SPHERE_2v_&_M1__s07115_out_object_11"].geometry}
          material={materials.luma}
          position={[6.76, 2.97, -3.25]}
          rotation={[0.4, 0.16, 3.12]}
          scale={0.38}
        />
        <mesh
          name="AS_ROMB_3v_&_M0__s07115_out_object_12"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_3v_&_M0__s07115_out_object_12"].geometry}
          material={materials.glass}
          position={[3.3, 4.96, 0.07]}
          rotation={[1.35, 1.48, -1.9]}
          scale={0.69}
        />
        <mesh
          name="AS_ROMB_3v_&_M0__s07115_out_object_13"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_3v_&_M0__s07115_out_object_13"].geometry}
          material={materials.luma}
          position={[3.3, 4.96, 0.07]}
          rotation={[1.35, 1.48, -1.9]}
          scale={0.69}
        />
        <mesh
          name="AS_ROMB_3v_&_M0__s07115_out_object_14"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_3v_&_M0__s07115_out_object_14"].geometry}
          material={materials.metall}
          position={[3.3, 4.96, 0.07]}
          rotation={[2.55, 0.39, -3.05]}
          scale={0.69}
        />
        <mesh
          name="AS_ROMB_6v_&_M0__s07115_out_object_15"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_6v_&_M0__s07115_out_object_15"].geometry}
          material={materials.glass}
          position={[-0.07, 4.95, 3.3]}
          rotation={[0.09, -0.02, 2.42]}
          scale={0.79}
        />
        <mesh
          name="AS_ROMB_6v_&_M0__s07115_out_object_16"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_6v_&_M0__s07115_out_object_16"].geometry}
          material={materials.luma}
          position={[-0.07, 4.95, 3.3]}
          rotation={[0.09, -0.02, -3.14]}
          scale={0.82}
        />
        <mesh
          name="AS_ROMB_6v_&_M0__s07115_out_object_17"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_6v_&_M0__s07115_out_object_17"].geometry}
          material={materials.metall}
          position={[-0.07, 4.95, 3.3]}
          rotation={[0.09, -0.02, 2.42]}
          scale={0.79}
        />
        <mesh
          name="AS_ROMB_5v_&_M0__s07115_out_object_18"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_5v_&_M0__s07115_out_object_18"].geometry}
          material={materials.glass}
          position={[-3.28, 4.96, -0.07]}
          rotation={[0.37, -1.33, -2.76]}
          scale={0.6}
        />
        <mesh
          name="AS_ROMB_5v_&_M0__s07115_out_object_19"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_5v_&_M0__s07115_out_object_19"].geometry}
          material={materials.luma}
          position={[-3.28, 4.96, -0.07]}
          rotation={[-3.12, 0.3, -2.73]}
          scale={0.57}
        />
        <mesh
          name="AS_ROMB_5v_&_M0__s07115_out_object_20"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_5v_&_M0__s07115_out_object_20"].geometry}
          material={materials.metall}
          position={[-3.25, 4.96, -0.06]}
          rotation={[0.37, -1.33, -2.76]}
          scale={0.6}
        />
        <mesh
          name="AS_ROMB_5v_&_M0__s07115_out_object_21"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_5v_&_M0__s07115_out_object_21"].geometry}
          material={materials.metall}
          position={[-3.28, 4.96, -0.07]}
          rotation={[0.37, -1.33, -2.76]}
          scale={0.6}
        />
        <mesh
          name="AS_ROMB_2v_&_M0__s07115_out_object_22"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_2v_&_M0__s07115_out_object_22"].geometry}
          material={materials.glass}
          position={[0.07, 4.96, -3.29]}
          rotation={[3.05, 0.02, 2.1]}
          scale={0.93}
        />
        <mesh
          name="AS_ROMB_2v_&_M0__s07115_out_object_23"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_2v_&_M0__s07115_out_object_23"].geometry}
          material={materials.metall}
          position={[0.07, 4.96, -3.29]}
          rotation={[3.05, 0.02, 0]}
          scale={0.93}
        />
        <mesh
          name="AS_ROMB_2v_&_M0__s07115_out_object_24"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_2v_&_M0__s07115_out_object_24"].geometry}
          material={materials.metall}
          position={[0.07, 4.96, -3.29]}
          rotation={[3.05, 0.02, 2.1]}
          scale={0.93}
        />
        <mesh
          name="AS_ROMB_2v_&_M0__s07115_out_object_25"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_2v_&_M0__s07115_out_object_25"].geometry}
          material={materials.luma}
          position={[0.06, 5, -2.89]}
          rotation={[3.05, 0.02, -1.05]}
          scale={0.55}
        />
        <mesh
          name="AS_ROMB_2v_&_M0__s07115_out_object_26"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_2v_&_M0__s07115_out_object_26"].geometry}
          material={materials.luma}
          position={[-0.05, 4.76, -3.28]}
          rotation={[3.05, 0.02, 2.09]}
          scale={0.55}
        />
        <mesh
          name="AS_ROMB_2v_&_M0__s07115_out_object_27"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_2v_&_M0__s07115_out_object_27"].geometry}
          material={materials.luma}
          position={[0.15, 4.91, -3.29]}
          rotation={[3.05, 0.02, 2.08]}
          scale={0.55}
        />
        <mesh
          name="AS_ROMB_2v_&_M0__s07115_out_object_28"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_2v_&_M0__s07115_out_object_28"].geometry}
          material={materials.luma}
          position={[-0.01, 5.01, -3.3]}
          rotation={[3.05, 0.02, 2.03]}
          scale={0.55}
        />
        <mesh
          name="AS_ROMB_2v_&_M0__s07115_out_object_29"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_2v_&_M0__s07115_out_object_29"].geometry}
          material={materials.luma}
          position={[0.22, 5.14, -3.31]}
          rotation={[3.05, 0.02, 1.95]}
          scale={0.55}
        />
        <mesh
          name="AS_ROMB_2v_&_M0__s07115_out_object_30"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_ROMB_2v_&_M0__s07115_out_object_30"].geometry}
          material={materials.luma}
          position={[0.08, 4.92, -3.7]}
          rotation={[3.05, 0.02, 1.81]}
          scale={0.55}
        />
        <mesh
          name="AS_CAPSULE_2v_&_M2__s07115_out_object_32"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_2v_&_M2__s07115_out_object_32"].geometry}
          material={materials.glass}
          position={[-1.69, -1.91, 2.74]}
          rotation={[2.11, 0.31, 0.47]}
          scale={1.22}
        />
        <mesh
          name="AS_CAPSULE_2v_&_M2__s07115_out_object_33"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_2v_&_M2__s07115_out_object_33"].geometry}
          material={materials.metall}
          position={[-2.77, 1.02, 4.5]}
          rotation={[2.11, 0.31, 0.47]}
          scale={0.87}
        />
        <mesh
          name="AS_CAPSULE_2v_&_M2__s07115_out_object_34"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_2v_&_M2__s07115_out_object_34"].geometry}
          material={materials.luma}
          position={[-2.27, -0.34, 3.69]}
          rotation={[2.11, 0.31, 0.47]}
          scale={2.14}
        />
        <mesh
          name="AS_CAPSULE_2v_&_M2__s07115_out_object_35"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_2v_&_M2__s07115_out_object_35"].geometry}
          material={materials.metall}
          position={[-1.35, -2.8, 2.2]}
          rotation={[2.11, 0.31, 0.47]}
          scale={0.71}
        />
        <mesh
          name="AS_CAPSULE_2v_&_M2__s07115_out_object_36"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_2v_&_M2__s07115_out_object_36"].geometry}
          material={materials.metall}
          position={[-1.69, -1.91, 2.74]}
          rotation={[2.11, 0.31, 0.47]}
          scale={1.22}
        />
        <mesh
          name="AS_CAPSULE_4v_&_M2__s07115_out_object_37"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_4v_&_M2__s07115_out_object_37"].geometry}
          material={materials.glass}
          position={[1.63, -2.52, 0.95]}
          rotation={[0.23, 1.01, 2.94]}
          scale={0.56}
        />
        <mesh
          name="AS_CAPSULE_4v_&_M2__s07115_out_object_38"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_4v_&_M2__s07115_out_object_38"].geometry}
          material={materials.luma}
          position={[-2.43, -1.93, -1.54]}
          rotation={[0.23, 1.01, -1.24]}
          scale={0.56}
        />
        <mesh
          name="AS_CAPSULE_4v_&_M2__s07115_out_object_39"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_4v_&_M2__s07115_out_object_39"].geometry}
          material={materials.luma}
          position={[-2.73, -1.88, -1.73]}
          rotation={[0.23, 1.01, -1.24]}
          scale={0.56}
        />
        <mesh
          name="AS_CAPSULE_4v_&_M2__s07115_out_object_40"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_4v_&_M2__s07115_out_object_40"].geometry}
          material={materials.luma}
          position={[-1.62, -2.05, -1.04]}
          rotation={[0.23, 1.01, -1.24]}
          scale={0.56}
        />
        <mesh
          name="AS_CAPSULE_4v_&_M2__s07115_out_object_41"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_4v_&_M2__s07115_out_object_41"].geometry}
          material={materials.metall}
          position={[-2.12, -1.97, -1.36]}
          rotation={[0.23, 1.01, -1.24]}
          scale={0.56}
        />
        <mesh
          name="AS_CAPSULE_3v_&_M2__s07115_out_object_42"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_3v_&_M2__s07115_out_object_42"].geometry}
          material={materials.glass}
          position={[1.69, -1.92, -2.74]}
          rotation={[0.14, -0.55, -0.97]}
          scale={1.1}
        />
        <mesh
          name="AS_CAPSULE_3v_&_M2__s07115_out_object_43"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_3v_&_M2__s07115_out_object_43"].geometry}
          material={materials.luma}
          position={[1.69, -1.92, -2.74]}
          rotation={[0.14, -0.55, -1.64]}
          scale={1.1}
        />
        <mesh
          name="AS_CAPSULE_3v_&_M2__s07115_out_object_44"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_3v_&_M2__s07115_out_object_44"].geometry}
          material={materials.metall}
          position={[1.69, -1.92, -2.74]}
          rotation={[0.14, -0.55, 2.47]}
          scale={1.1}
        />
        <mesh
          name="AS_CAPSULE_3v_&_M2__s07115_out_object_45"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_3v_&_M2__s07115_out_object_45"].geometry}
          material={materials.glass}
          position={[2.74, -1.92, 1.69]}
          rotation={[2.91, -1.01, 1.9]}
          scale={1.1}
        />
        <mesh
          name="AS_CAPSULE_3v_&_M2__s07115_out_object_46"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_3v_&_M2__s07115_out_object_46"].geometry}
          material={materials.luma}
          position={[2.74, -1.92, 1.69]}
          rotation={[2.91, -1.01, 1.23]}
          scale={1.1}
        />
        <mesh
          name="AS_CAPSULE_3v_&_M2__s07115_out_object_47"
        //   castShadow
        //   receiveShadow
          geometry={nodes["AS_CAPSULE_3v_&_M2__s07115_out_object_47"].geometry}
          material={materials.metall}
          position={[2.74, -1.92, 1.69]}
          rotation={[2.91, -1.01, -0.95]}
          scale={1.1}
        />
        <mesh
          name="Wobblebug_2_object_31"
          castShadow
          receiveShadow
          geometry={nodes.Wobblebug_2_object_31.geometry}
          material={imageUrl ? material : materials.Wobblebug}
          position={[0, 2, 0]}
          rotation={[2.1, -0.02, 0.43]}
          scale={1.14}
        />
        <mesh
          name="Wobblebug_2_object_31001"
          castShadow
          receiveShadow
          geometry={nodes.Wobblebug_2_object_31001.geometry}
          material={materials.Wobblebug}
          position={[0, 2, 0]}
          rotation={[2.1, -0.02, 0.43]}
          scale={1.14}
        />
        <mesh
          name="Liquid_8_object_48"
          castShadow
          receiveShadow
          geometry={nodes.Liquid_8_object_48.geometry}
          material={ imageUrl ? material : materials.liquid}
          position={[-0.01, 1.19, 0.02]}
          rotation={[Math.PI / 2, 0, 0.02]}
          scale={1.86}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/WOBBLEBUG_2.glb");
