'use client'
import HeroTerminal from '@/components/hero-terminal'
import ExperienceTimeline from '@/components/experience-timeline'
import ProjectGrid from '@/components/project-grid'
import SkillsInteractive from '@/components/SkillsInteractive'
import { ABOUT } from '@/lib/data'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

    return (
        <main ref={containerRef} className="min-h-screen">
            <HeroTerminal />

            {/* Enhanced About Section with Parallax */}
            <motion.section
                style={{ y, opacity }}
                className="max-w-6xl mx-auto px-6 py-24"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
                        <p className="opacity-90 max-w-3xl text-lg leading-relaxed">{ABOUT.blurb}</p>
                        <ul className="mt-6 flex flex-wrap gap-2 text-sm text-muted">
                            {ABOUT.fun.map((f) => (
                                <motion.li
                                    key={f}
                                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 cursor-glow morph-shape"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {f.replace(/^[\p{Emoji_Presentation}\p{Emoji}\uFE0F]+\s*/gu, '')}
                                </motion.li>
                            ))}
                        </ul>

                        {/* Interactive CTA Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <motion.a
                                href="mailto:viom@example.com"
                                className="px-6 py-3 rounded-lg border border-white/15 hover:border-white/30 cursor-glow transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Email Me
                            </motion.a>
                            <motion.a
                                href="#"
                                className="px-6 py-3 rounded-lg bg-brand/20 border border-brand/30 hover:bg-brand/30 cursor-glow transition-all duration-300 animate-glow"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let&apos;s Work Together
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Replace stats with a concise value proposition and CTA list */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-xl font-semibold mb-2">What I	do</h3>
                            <ul className="list-disc list-inside text-muted">
                                <li>Build AI systems that drive measurable business outcomes</li>
                                <li>Create finance models and dashboards for faster decisions</li>
                                <li>Design reliable full-stack products, end to end</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-xl font-semibold mb-2">How I can help</h3>
                            <ul className="list-disc list-inside text-muted">
                                <li>Prototype ML features and deploy to production</li>
                                <li>Automate reporting and analytics workflows</li>
                                <li>Ship user-facing apps with clean UI/UX</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <ExperienceTimeline />
            <SkillsInteractive />
            <ProjectGrid />

            {/* Enhanced Contact Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto px-6 py-24 text-center"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl font-semibold mb-6"
                >
                    Ready to Build Something Amazing?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-muted mb-8 max-w-2xl mx-auto"
                >
                    Let&apos;s turn your ideas into reality. Whether it&apos;s a data-driven dashboard,
                    an AI-powered solution, or a strategic analysis, I&apos;m here to help.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <motion.a
                        href="mailto:viom@example.com"
                        className="px-8 py-4 rounded-lg bg-brand/20 border border-brand/30 hover:bg-brand/30 cursor-glow transition-all duration-300 animate-glow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start a Conversation
                    </motion.a>
                    <motion.a
                        href="/Viom_Kapur_Resume.pdf"
                        className="px-8 py-4 rounded-lg border border-white/15 hover:border-white/30 cursor-glow transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download Resume
                    </motion.a>
                </motion.div>
            </motion.section>
        </main>
    )
}