import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollProgress } from '../hooks/useScrollProgress'

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null!)
  const count = 2000

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 3 + Math.random() * 18
      positions[i * 3]     = Math.cos(angle) * radius
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60
      positions[i * 3 + 2] = Math.sin(angle) * radius * 0.3 - Math.random() * 80
      const isRed = Math.random() > 0.6
      colors[i * 3]     = isRed ? 0.6 + Math.random() * 0.4 : 0.9
      colors[i * 3 + 1] = isRed ? 0 : 0.85
      colors[i * 3 + 2] = isRed ? 0 : 0.8
    }
    return { positions, colors }
  }, [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.04
    meshRef.current.rotation.z = t * 0.01
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function PortalRings() {
  const refs = useRef<THREE.Mesh[]>([])
  const rings = useMemo(() =>
    Array.from({ length: 10 }, (_, i) => ({
      radius:  2 + i * 0.35,
      posZ:    -i * 9 - 5,
      color:   i % 3 === 0 ? 0xcc1a1a : 0x3a0000,
      speed:   0.001 + Math.random() * 0.002,
    })), [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    refs.current.forEach((mesh, i) => {
      if (!mesh) return
      mesh.rotation.z += rings[i].speed
      ;(mesh.material as THREE.MeshBasicMaterial).opacity = 0.08 + Math.sin(t * 0.5 + i) * 0.06
    })
  })

  return (
    <>
      {rings.map((r, i) => (
        <mesh
          key={i}
          ref={el => { if (el) refs.current[i] = el }}
          position={[0, 0, r.posZ]}
          rotation={[Math.PI * 0.05, 0, 0]}
        >
          <torusGeometry args={[r.radius, 0.01, 8, 64]} />
          <meshBasicMaterial color={r.color} transparent opacity={0.12} blending={THREE.AdditiveBlending} />
        </mesh>
      ))}
    </>
  )
}

function GlowCore() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const p = 0.25 + Math.sin(t * 2) * 0.08
    ref.current.scale.set(p, p, p)
    ;(ref.current.material as THREE.MeshBasicMaterial).opacity = 0.4 + Math.sin(t * 3) * 0.25
  })
  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshBasicMaterial color={0xcc1a1a} transparent opacity={0.7} />
    </mesh>
  )
}

function SpeedStreaks() {
  const groupRef = useRef<THREE.Group>(null!)
  const streaks = useMemo(() =>
    Array.from({ length: 60 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2
      const r = 0.8 + Math.random() * 4
      return {
        x: Math.cos(angle) * r,
        y: (Math.random() - 0.5) * 8,
        z: -Math.random() * 40,
        len: 0.2 + Math.random() * 1.2,
        speed: 0.25 + (i % 4) * 0.08,
        color: i % 2 === 0 ? 0x8b0000 : 0xcc1a1a,
        opacity: Math.random() * 0.4 + 0.1,
      }
    }), [])

  useFrame(() => {
    groupRef.current?.children.forEach((child, i) => {
      child.position.z += streaks[i].speed
      if (child.position.z > 8) child.position.z = -45
    })
  })

  return (
    <group ref={groupRef}>
      {streaks.map((s, i) => {
        const verts = new Float32Array([s.x, s.y, s.z, s.x * 1.01, s.y, s.z - s.len])
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(verts, 3))
        return (
          <primitive key={i} object={new THREE.Line(
            geo,
            new THREE.LineBasicMaterial({ color: s.color, transparent: true, opacity: s.opacity, blending: THREE.AdditiveBlending, depthWrite: false })
          )} />
        )
      })}
    </group>
  )
}

function CameraRig({ progress }: { progress: number }) {
  const mx = useRef(0)
  const my = useRef(0)
  if (typeof window !== 'undefined') {
    window.onmousemove = (e: MouseEvent) => {
      mx.current = (e.clientX / window.innerWidth - 0.5) * 2
      my.current = (e.clientY / window.innerHeight - 0.5) * 2
    }
  }
  useFrame(({ camera }) => {
    camera.position.z += (5 - progress * 55 - camera.position.z) * 0.07
    camera.position.y += (-progress * 2 - camera.position.y) * 0.07
    camera.position.x += (mx.current * 1.2 - camera.position.x) * 0.03
    camera.rotation.y += (-mx.current * 0.04 - camera.rotation.y) * 0.05
    camera.rotation.x += (my.current * 0.02 - camera.rotation.x) * 0.05
  })
  return null
}

export default function BackgroundScene() {
  const progress = useScrollProgress()
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%', height: '100%',
      zIndex: 0,           // behind everything
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 2000 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' , pointerEvents:'none' }}
      >
        <CameraRig progress={progress} />
        <ParticleField />
        <SpeedStreaks />
        <PortalRings />
        <GlowCore />
        <gridHelper args={[60, 40, 0x8b0000, 0x1a0000]} position={[0, -6, 0]} />
      </Canvas>
    </div>
  )
}
