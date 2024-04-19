// import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import { useRef, useState } from 'react'
import { useFrame, ThreeElements, Canvas } from '@react-three/fiber'
import { HStack,Text, Box, VStack, StackDivider } from '@chakra-ui/react'
import { EmojiAvatar } from 'src/comps/emojis/avatar'
import { BlockNote } from 'src/comps/note'


function BoxThreeD(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Cubes(){
  return ( 
  <Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <BoxThreeD position={[-1.2, 0, 0]} />
    <BoxThreeD position={[1.2, 0, 0]} />
  </Canvas>
  )
}


export function Home(){
  return (
    <VStack 
      divider={<StackDivider borderColor='gray.200' />}
      bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, purple.300)',
      ]}
    >
        <HStack h='500px'>
          <Text
            fontWeight='bold'
            fontSize="6xl"
            bgClip="text"
            bgGradient="linear(to-l, #7928CA,#FF0080)" 
            >
            Новый подход к обучению
          </Text>
          <Cubes/>
        </HStack>
        <HStack h='500px'>
          <Text
            fontWeight='bold'
            fontSize="6xl"
            bgClip="text"
            bgGradient="linear(to-l, #7928CA,#FF0080)" 
            >
            Ваш ассистент
          </Text>
          <EmojiAvatar/>
        </HStack>
        <HStack h='500px'>
        <Text
            fontWeight='bold'
            fontSize="6xl"
            bgClip="text"
            bgGradient="linear(to-l, #7928CA,#FF0080)" 
            >
            Безграничные возможности
          </Text>
          <BlockNote/>
        </HStack>
    </VStack>
  )
}
    
