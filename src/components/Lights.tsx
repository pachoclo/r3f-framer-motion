import { motion } from 'framer-motion-3d'

export function Lights() {
  return (
    <>
      <directionalLight
        position={[-3, 2, 1]}
        intensity={2}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
      <motion.ambientLight intensity={0.2} />
    </>
  )
}
