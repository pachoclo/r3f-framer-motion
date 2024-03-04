import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { Cube } from './Cube'
import { Lights } from './Lights'
import { Plane } from './Plane'

function Scene() {
  const { performance } = useControls('Monitoring', {
    performance: false,
  })

  return (
    <>
      {performance && <Perf position='top-left' />}
      <OrbitControls makeDefault />
      <Lights />
      <Cube />
      <Plane />
    </>
  )
}

export { Scene }
