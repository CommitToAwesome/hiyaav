import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

function FloatingParticles({ count = 100, color = '#d4af37' }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { viewport, camera } = useThree();
  
  useEffect(() => {
    if (!mesh.current) return;
    
    // Position particles randomly in 3D space
    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      
      dummy.position.set(x, y, z);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [count]);
  
  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    const dummy = new THREE.Object3D();
    
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const x = (Math.sin(time * 0.1 + idx) * Math.cos(time * 0.1 + idx) * 5);
      const y = (Math.cos(time * 0.1 + idx) * 5);
      const z = (Math.sin(time * 0.1 + idx) * 5);
      
      dummy.position.set(x, y, z);
      dummy.rotation.set(time * 0.1, time * 0.1, time * 0.1);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    
    mesh.current.instanceMatrix.needsUpdate = true;
    
    // Rotate the entire particle system
    mesh.current.rotation.y = time * 0.05;
  });
  
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.05, 0]} />
      <meshStandardMaterial color={color} metalness={1} roughness={0.2} />
    </instancedMesh>
  );
}

function FloatingLogo() {
  const { viewport } = useThree();
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) * 0.3;
    group.current.position.y = Math.sin(t / 2) * 0.2;
  });
  
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={group} position={[0, 0, -2]} scale={[0.8, 0.8, 0.8]}>
        <mesh>
          <torusKnotGeometry args={[0.7, 0.3, 100, 16]} />
          <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function CameraRig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, 10), 0.05);
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

export default function Background() {
  return (
    <div className="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#d4af37" intensity={0.5} />
        
        <FloatingParticles count={200} />
        <FloatingLogo />
        <CameraRig />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}