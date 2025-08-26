'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo, useRef } from 'react'

const skills = [
    { label: 'TypeScript', value: 8 },
    { label: 'React/Next', value: 9 },
    { label: 'Three.js', value: 6 },
    { label: 'Anime.js', value: 7 },
    { label: 'Tailwind', value: 9 },
    { label: 'Finance', value: 8 },
    { label: 'Data Viz', value: 7 }
]

function Bars() {
    const group = useRef<THREE.Group>(null)
    const bars = useMemo(() => skills.map((s, i) => ({ ...s, x: i - skills.length / 2 + 0.5 })), [])

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()
        if (!group.current) return
        group.current.children.forEach((child, i) => {
            const base = skills[i].value
            const osc = Math.sin(t * 1.2 + i) * 0.4 + 1
                ; (child as THREE.Mesh).scale.y = Math.max(0.1, (base / 10) * 3 * osc)
        })
    })

    return (
        <group ref={group}>
            {bars.map((b, i) => (
                <mesh key={b.label} position={[b.x * 0.8, 1, 0]}>
                    <boxGeometry args={[0.5, 2, 0.5]} />
                    <meshStandardMaterial
                        color="#6ee7ff"
                        emissive="#6ee7ff"
                        emissiveIntensity={0.3}
                        metalness={0.8}
                        roughness={0.2}
                    />
                </mesh>
            ))}
        </group>
    )
}

function Ground() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[20, 10]} />
            <meshStandardMaterial
                color="#1a1f2e"
                emissive="#0f1218"
                emissiveIntensity={0.1}
            />
        </mesh>
    )
}

function Background() {
    return (
        <mesh position={[0, 0, -5]}>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial
                color="#0b0d12"
                emissive="#0f1218"
                emissiveIntensity={0.05}
            />
        </mesh>
    )
}

function FloatingParticles() {
    const particles = useRef<THREE.Points>(null)
    const count = 100

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10
            pos[i * 3 + 1] = Math.random() * 5
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10
        }
        return pos
    }, [])

    useFrame(({ clock }) => {
        if (!particles.current) return
        const time = clock.getElapsedTime()
        particles.current.rotation.y = time * 0.1
        particles.current.position.y = Math.sin(time * 0.5) * 0.5
    })

    return (
        <points ref={particles}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#6ee7ff"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    )
}

export default function SceneTicker() {
    return (
        <Canvas camera={{ position: [3.5, 3, 6], fov: 40 }}>
            {/* Enhanced lighting */}
            <ambientLight intensity={0.8} color="#6ee7ff" />
            <directionalLight position={[5, 6, 4]} intensity={1.5} color="#ffffff" />
            <pointLight position={[0, 5, 0]} intensity={0.8} color="#6ee7ff" />
            <pointLight position={[-5, 2, 5]} intensity={0.6} color="#6ee7ff" />
            <pointLight position={[5, 2, -5]} intensity={0.6} color="#6ee7ff" />

            {/* Scene elements */}
            <Background />
            <FloatingParticles />
            <Bars />
            <Ground />

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.6}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 4}
            />

            <Html position={[0, 3.2, 0]} center>
                <div className="px-3 py-2 text-sm rounded-lg bg-black/80 border border-white/20 backdrop-blur-sm">
                    <span className="text-brand font-mono">skills-as-candles</span>
                </div>
            </Html>
        </Canvas>
    )
}