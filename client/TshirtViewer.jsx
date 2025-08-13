import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TShirtModel from './TShirtModel'

export default function TShirtViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <TShirtModel />
      <OrbitControls />
    </Canvas>
  )
}
