import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

const RotatingCube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  // GSAP animation when component mounts
  React.useEffect(() => {
    gsap.fromTo(
      cubeRef.current.scale,
      { x: 0, y: 0, z: 0 },
      { x: 1, y: 1, z: 1, duration: 2, ease: "elastic.out(1, 0.3)" }
    );
  }, []);

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <OrbitControls />
      <RotatingCube />
    </Canvas>
  );
};

export default ThreeScene;