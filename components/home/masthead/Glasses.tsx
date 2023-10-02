/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 glasses.gltf --types
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
  },
}

type AdditionalProps = { randomColor1?: string, randomColor2?: string }
export function Glasses(props: JSX.IntrinsicElements['group'] & AdditionalProps) {
  const { nodes } = useGLTF('/glasses.gltf') as GLTFResult
  const material = new THREE.ShaderMaterial({ side: THREE.DoubleSide, uniforms: {
    color1: {
      value: new THREE.Color(props.randomColor1 || "#fd644f")
    },
    color2: {
      value: new THREE.Color(props.randomColor2 || "#ff9d00")
    },
    bboxMin: {
      value: nodes.Plane.geometry.boundingBox?.min
    },
    bboxMax: {
      value: nodes.Plane.geometry.boundingBox?.max
    }
  },
  vertexShader: `
    uniform vec3 bboxMin;
    uniform vec3 bboxMax;
  
    varying vec2 vUv;

    void main() {
      vUv.x = (position.x - bboxMin.x) / (bboxMax.x - bboxMin.x);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1);
    }
  `,
  fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    varying vec2 vUv;
    
    void main() {
      
      gl_FragColor = vec4(mix(color1, color2, vUv.x), 1.0);
    }
  `});
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={material}/>
      
    </group>
  )
}

useGLTF.preload('/glasses.gltf')