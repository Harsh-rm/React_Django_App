import React, { useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function HumanModel() {
  const { scene, camera } = useThree();
  const modelRef = useRef();
  const { scene: model } = useGLTF("https://threejs.org/examples/models/gltf/LeePerrySmith/LeePerrySmith.glb");

  const eyeLeftRef = useRef();
  const eyeRightRef = useRef();

  // Handle the model once loaded
  useEffect(() => {
    if (model) {
      modelRef.current = model;
      model.scale.set(1, 1, 1);  // Reduce the model size
      model.position.set(0, -1, -2);  // Position the model further back

      // Find the left and right eye meshes by name (adjust based on your model's mesh names)
      const eyeLeft = model.getObjectByName("eye_left"); // Replace with the actual name if it's different
      const eyeRight = model.getObjectByName("eye_right"); // Replace with the actual name if it's different

      if (eyeLeft) eyeLeftRef.current = eyeLeft;
      if (eyeRight) eyeRightRef.current = eyeRight;

      scene.add(model);
    }

    return () => {
      if (modelRef.current) {
        scene.remove(modelRef.current);
      }
    };
  }, [model, scene]);

  // Set camera position to a further back angle
  useEffect(() => {
    camera.position.set(0, 1.5, 10);  // Move the camera further back
    camera.lookAt(0, 1, 0);  // Ensure the camera looks at the model's center
  }, [camera]);

  // Animate the eyes (e.g., rotating them)
  useEffect(() => {
    if (eyeLeftRef.current && eyeRightRef.current) {
      const animateEyes = () => {
        const time = performance.now() / 1000;  // Time for animation
        eyeLeftRef.current.rotation.x = Math.sin(time) * 0.2;
        eyeRightRef.current.rotation.x = Math.cos(time) * 0.2;

        requestAnimationFrame(animateEyes);
      };

      animateEyes();
    }
  }, []);

  return (
    <primitive object={model} />
  );
}

function AnimationPage() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 10], fov: 50 }}  // Even further back camera position
      style={{ height: "100vh", width: "100%" }}  // Ensure the canvas takes the full screen height
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} />
      <HumanModel />
      <OrbitControls enableZoom={true} enablePan={true} />
    </Canvas>
  );
}

export default AnimationPage;
