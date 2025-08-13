import { useGLTF } from '@react-three/drei'

export default function TShirtModel() {
  const { scene } = useGLTF('/tshirt.glb') // File public/tshirt.glb me honi chahiye

  return <primitive object={scene} scale={1.5} />
}
