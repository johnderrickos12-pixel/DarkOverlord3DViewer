import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

function DarkOverlordModel() {
  return (
    <mesh>
      <boxGeometry args={[2, 4, 1.5]} />
      <meshStandardMaterial color="#1A1A1A" metalness={0.7} roughness={0.3} emissive="#00FFFF" emissiveIntensity={0.5} />
      {/* Simple "horns" */}
      <mesh position={[0.7, 2.3, 0]} rotation={[0, 0, Math.PI / 6]}>
        <coneGeometry args={[0.3, 1, 8]} />
        <meshStandardMaterial color="#000000" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.7, 2.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <coneGeometry args={[0.3, 1, 8]} />
        <meshStandardMaterial color="#000000" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Glowing eyes */}
      <mesh position={[0.3, 1.5, 0.75]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={10} />
      </mesh>
      <mesh position={[-0.3, 1.5, 0.75]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={10} />
      </mesh>
    </mesh>
  );
}

function App() {
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <DarkOverlordModel />
        <OrbitControls />
        <Environment preset="night" />
      </Canvas>
      <div className="absolute top-4 left-4 text-zinc-400 font-mono">
        Dark Overlord Concept Viewer
      </div>
    </div>
  );
}

export default App;
