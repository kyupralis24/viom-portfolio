'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const FaultyTerminal = dynamic(() => import('./FaultyTerminal'), { ssr: false })
const Lanyard = dynamic(() => import('./Lanyard'), { ssr: false })

export default function HeroTerminal() {
    const [mounted, setMounted] = useState(false)
    const termRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setMounted(true)
        const el = termRef.current
        if (!el) return
        const lines = Array.from(el.querySelectorAll('[data-line]')) as HTMLElement[]

        // prepare lines
        lines.forEach((l) => {
            l.style.opacity = '1'
            l.textContent = ''
        })

        // type each line sequentially, char-by-char
        let lineIndex = 0
        let charIndex = 0
        let current = lines[0]
        const fullTexts = lines.map((l) => l.dataset.line || '')
        const cursor = document.createElement('span')
        cursor.textContent = '▉'
        cursor.style.opacity = '0.8'
        cursor.style.marginLeft = '2px'
        cursor.style.animation = 'blink 1s steps(1) infinite'

        const style = document.createElement('style')
        style.innerHTML = `@keyframes blink{50%{opacity:0}}`
        document.head.appendChild(style)

        const tick = () => {
            if (!current) return
            const full = fullTexts[lineIndex]
            if (charIndex <= full.length) {
                current.textContent = full.slice(0, charIndex)
                current.appendChild(cursor)
                charIndex += Math.random() < 0.1 ? 2 : 1 // slight humanization
                setTimeout(tick, 24 + Math.floor(Math.random() * 40))
            } else {
                // finish this line
                if (current.contains(cursor)) current.removeChild(cursor)
                lineIndex += 1
                charIndex = 0
                if (lineIndex < lines.length) {
                    current = lines[lineIndex]
                    setTimeout(tick, 250)
                }
            }
        }
        tick()

        return () => {
            if (style && style.parentNode) style.parentNode.removeChild(style)
        }
    }, [])

    return (
        <section id="home" className="relative overflow-hidden">
            {/* Faulty Terminal Background */}
            <div className="absolute inset-0">
                <FaultyTerminal
                    scale={1.5}
                    gridMul={[3, 2]}
                    digitSize={1.2}
                    timeScale={0.4}
                    scanlineIntensity={0.4}
                    glitchAmount={1.2}
                    flickerAmount={0.8}
                    curvature={0.1}
                    tint="#6ee7ff"
                    mouseReact={true}
                    mouseStrength={0.3}
                    brightness={0.8}
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-16 py-24 items-center">
                    {/* Terminal Card */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="rounded-2xl glass-strong border border-white/10 shadow-glass overflow-hidden cursor-glow"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
                            <span className="size-3 rounded-full bg-red-500/70 animate-pulse-slow" />
                            <span className="size-3 rounded-full bg-yellow-500/70 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                            <span className="size-3 rounded-full bg-green-500/70 animate-pulse-slow" style={{ animationDelay: '1s' }} />
                            <span className="ml-3 text-sm text-muted">viom@portfolio:~</span>
                        </div>
                        <div ref={termRef} className="p-6 font-mono text-[15px] leading-relaxed">
                            <div className="text-brand/90">$ whoami</div>
                            <div data-line="Viom Kapur — AI Engineer × Finance Student. Building intelligent systems that bridge finance and technology." className="text-text/90" />
                            <div className="mt-4 text-brand/90">$ tagline</div>
                            <div data-line="AI-powered financial analyst; quantitative strategist; full-stack engineer." />
                            <div className="mt-4 text-brand/90">$ ls ~/focus</div>
                            <div data-line="Machine Learning • Financial Modeling • M&A Analysis • Web Development" />
                            <div className="mt-4 text-brand/90">$ open ./contact --cta</div>
                        </div>
                    </motion.div>

                    {/* Right-side: Lanyard */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {mounted && <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />}
                    </motion.div>
                </div>
            </div>

            {/* Enhanced gradient glow */}
            <div className="absolute -z-10 top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(ellipse_at_center,rgba(110,231,255,0.15),transparent_60%)] animate-pulse-slow" />

            {/* Easter Egg: Hidden Konami Code */}
            <div className="fixed top-4 right-4 text-xs text-muted/30 select-none">
                Press ↑↑↓↓←→←→BA for a surprise
            </div>
        </section>
    )
}