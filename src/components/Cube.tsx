import { useMotionValue } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { useState } from 'react'

function Cube() {
  const x = useMotionValue(0)

  const [currentX, setCurrentX] = useState<number>(0)
  const [delta, setDelta] = useState<number>(3)

  return (
    <motion.mesh
      castShadow
      position-x={x}
      position-y={0.6}
      animate={{ x: currentX }}
      onPointerEnter={(e) => {
        const nextX = Math.round(currentX + delta)
        if (nextX <= -4 || nextX >= 4) setDelta((delta) => delta * -1)
        setCurrentX(nextX)
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <motion.meshStandardMaterial color={'mediumpurple'} />
    </motion.mesh>
  )
}

export { Cube }
