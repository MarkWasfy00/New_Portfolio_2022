import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Merged_Objects_1: THREE.Mesh
  }
  materials: {
    Lifeline: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  
  const { nodes, materials } = useGLTF('/WModel/WModel-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Merged_Objects_1.geometry} material={materials.Lifeline} position={[-0.13, 0.45, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.01} >
        <meshPhysicalMaterial color="red" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/WModel/WModel-transformed.glb')
