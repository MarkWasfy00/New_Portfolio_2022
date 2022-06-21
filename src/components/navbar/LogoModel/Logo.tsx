import * as THREE from 'three'
import React, { useRef,useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Camera, Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap'
import { Light } from 'three'


type GLTFResult = GLTF & {
    nodes: {
      Merged_Objects_1: THREE.Mesh
    }
    materials: {
      Lifeline: THREE.MeshStandardMaterial
    }
}


function MModel() {
    
    const { nodes, materials } = useGLTF('/MModel/MModel-transformed.glb') as GLTFResult
    
    

    return (
      <group scale={0.8} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Merged_Objects_1.geometry} material={materials.Lifeline} position={[-0.13, -0.21, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <meshPhysicalMaterial  metalness={.5} roughness={0}  />
        </mesh>
      </group>
    )
}

function WModel(){
    const { nodes, materials } = useGLTF('/WModel/WModel-transformed.glb') as GLTFResult
    return (
        <group  scale={0.8} dispose={null}>
        <mesh geometry={nodes.Merged_Objects_1.geometry} position={[.6,.7,0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.01} >
            <meshPhysicalMaterial  metalness={.5} roughness={0} />
        </mesh>
        </group>
    )
}


const Logo = () => {
    const neon = useState(true)
    const camera = useRef<Camera>()
    const light = useRef<any>()

    useEffect(() => {
        if(light.current){
            const tl = gsap.timeline({repeat:-1 , yoyo:true ,defaults:{duration:1}})
            tl.fromTo(light.current.position,{
                x:-1,
            },{
                x:1,
            })
           
        }
    },[light.current])

    return (
        <>
            <PerspectiveCamera ref={camera}  makeDefault position={[1,0,2]} />
            <OrbitControls enableZoom={false}  autoRotateSpeed={10}  />
            <ambientLight  intensity={.3} />
            <spotLight ref={light} color="white" position={[0,0,1]}   />
            <directionalLight   position={[1,0,1]} /> 
            <MModel />
            <WModel />
        </>
    )
}

export default Logo