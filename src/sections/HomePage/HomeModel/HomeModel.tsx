import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useEffect, useRef } from 'react';
import gsap from 'gsap/all';



type GLTFResult = GLTF & {
  nodes: {
    pCube43_lambert4_0: THREE.Mesh
    pCube43_MetalShiny_0: THREE.Mesh
    pCube43_Rubber_0: THREE.Mesh
    pCube43_Metal_0: THREE.Mesh
    pCube43_lambert1_0: THREE.Mesh
    pCube43_pasted__Eyes_0: THREE.Mesh
    pCube43_BlackGlass_0: THREE.Mesh
  }
  materials: {
    lambert4: THREE.MeshStandardMaterial
    MetalShiny: THREE.MeshStandardMaterial
    Rubber: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    lambert1: THREE.MeshStandardMaterial
    pasted__Eyes: THREE.MeshStandardMaterial
    BlackGlass: THREE.MeshStandardMaterial
  }
}




const HomeModel = () => {
  const robotModel = useRef<any>()
  const camera = useRef<any>()

  useEffect(() => {
    if(camera.current){
      // const tl = gsap.timeline({repeat:-1,yoyo:true,defaults:{duration:2,ease:"slow(0.7, 0.7, false)"}})
      const resetAnimation = setInterval(() => {
        gsap.to(camera.current.position,{
          x:0,
          y:.8,
          z:2,
          ease:"slow(0.7, 0.7, false)",
        })
      },5000)
      
      return () => clearInterval(resetAnimation)
    };
    

  },[camera.current])
  
  
  
  function Robot() {
    const { nodes, materials } = useGLTF('HomeModel/scene-transformed.glb') as GLTFResult
    return (
      <group ref={robotModel} dispose={null} scale={0.15} rotation={[-.2,4.7,0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.pCube43_lambert4_0.geometry} material={materials.lambert4} />
            <mesh geometry={nodes.pCube43_MetalShiny_0.geometry} material={materials.MetalShiny} />
            <mesh geometry={nodes.pCube43_Rubber_0.geometry} material={materials.Rubber} />
            <mesh geometry={nodes.pCube43_Metal_0.geometry} material={materials.Metal} />
            <mesh  geometry={nodes.pCube43_lambert1_0.geometry} material={materials.lambert1} />
            <mesh geometry={nodes.pCube43_pasted__Eyes_0.geometry} material={materials.pasted__Eyes} />
            <mesh geometry={nodes.pCube43_BlackGlass_0.geometry} material={materials.BlackGlass} />
          </group>
        </group>
      </group>
    )
  }

  return (
    <>
      <PerspectiveCamera ref={camera} makeDefault position={[0,0.8,2]}  />
      <OrbitControls autoRotate  enableZoom={false}  />
      <ambientLight intensity={0.2} />
      <spotLight color="black" position={[1,-2,0]} />
      <directionalLight  color="white" position={[0,1,0]} />
      <Robot  />
    </>
  )
}

export default HomeModel