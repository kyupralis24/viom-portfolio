'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const [, setKonamiCode] = useState<string[]>([])
    const [showEasterEgg, setShowEasterEgg] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']

        const handleKeyDown = (e: KeyboardEvent) => {
            setKonamiCode(prev => {
                const newCode = [...prev, e.code]
                if (newCode.length > konamiSequence.length) {
                    newCode.shift()
                }

                if (newCode.join(',') === konamiSequence.join(',')) {
                    setShowEasterEgg(true)
                    setTimeout(() => setShowEasterEgg(false), 3000)
                }

                return newCode
            })
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>
            <header className="sticky top-0 z-40 backdrop-blur bg-bg/70 border-b border-white/10">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-lg font-semibold"
                    >
                        Viom Kapur
                    </motion.div>

                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="hidden md:flex items-center gap-6 text-sm"
                    >
                        <motion.a
                            href="#home"
                            className="hover:text-brand transition-colors duration-300 cursor-glow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Home
                        </motion.a>
                        <motion.a
                            href="#experience"
                            className="hover:text-brand transition-colors duration-300 cursor-glow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Experience
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="hover:text-brand transition-colors duration-300 cursor-glow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Projects
                        </motion.a>
                        <motion.a
                            href="#skills"
                            className="hover:text-brand transition-colors duration-300 cursor-glow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Skills
                        </motion.a>
                    </motion.nav>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        {mounted && (
                            <motion.button
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 text-xs cursor-glow transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {theme === 'light' ? '🌙' : '☀️'}
                            </motion.button>
                        )}
                        <motion.a
                            href="/Viom_Kapur_Resume.pdf"
                            className="px-3 py-1.5 rounded-lg bg-brand/20 hover:bg-brand/30 border border-brand/30 text-xs cursor-glow transition-all duration-300 animate-glow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </header>

            {/* Konami Code Easter Egg */}
            <AnimatePresence>
                {showEasterEgg && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -50 }}
                        className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-panel border border-brand/30 rounded-lg p-4 shadow-glass"
                    >
                        <div className="text-center">
                            <div className="text-2xl mb-2">🎉</div>
                            <div className="text-sm font-medium text-brand">Easter Egg Found!</div>
                            <div className="text-xs text-muted mt-1">You&apos;re a true gamer!</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
