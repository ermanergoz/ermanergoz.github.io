import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import PhoneModel from "./PhoneModel";
import * as THREE from "three";

const RotatingPhone = () => {
  const [rotationY, setRotationY] = useState(Math.PI);
  const aboutRef = useRef<HTMLDivElement>(null);

  const minRotation = Math.PI;
  const maxRotation = 0;

  const earlyStartOffset = window.innerHeight / 5;
  const calculateRotation = (scrollFraction: number) => {
    return minRotation + scrollFraction * (maxRotation - minRotation);
  };

  const handleScroll = () => {
    if (aboutRef.current) {
      const aboutTop = aboutRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const scrollFraction = Math.min(
        Math.max(1 - (aboutTop - earlyStartOffset) / (windowHeight / 2), 0),
        1
      );

      setRotationY(calculateRotation(scrollFraction));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={aboutRef} className="rotating-phone">
      <Canvas>
        {/*<ambientLight intensity={0} />*/}
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <Phone rotationY={rotationY} />
      </Canvas>
    </div>
  );
};

const Phone = ({ rotationY }: { rotationY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotationY;
    }
  });

  return (
    <mesh ref={meshRef}>
      <PhoneModel />
    </mesh>
  );
};

export default RotatingPhone;
