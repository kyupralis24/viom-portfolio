'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EXPERIENCE } from '@/lib/data'
import Link from 'next/link'
import { useState, useRef } from 'react'
import Image from 'next/image'

export default function ExperienceTimeline() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

    return (
        <section ref={containerRef} className="relative py-24 overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-panel/20 to-transparent"
            />

            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 left-10 w-2 h-2 bg-brand/60 rounded-full"
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-3 h-3 bg-brand/40 rounded-full"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />

            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        My journey through finance, technology, and strategic roles that shaped my expertise in
                        data-driven decision making and innovative problem solving.
                    </p>
                </motion.div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={exp.slug}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group"
                            onMouseEnter={() => setHoveredCard(exp.slug)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Card Container */}
                            <Link href={`/experience/${exp.slug}`}>
                                <motion.div
                                    className="relative h-full p-8 rounded-2xl glass-strong border border-white/10 overflow-hidden cursor-glow perspective-1000"
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                        rotateY: 5,
                                        rotateX: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                    style={{
                                        background: hoveredCard === exp.slug
                                            ? `linear-gradient(135deg, ${exp.color}10, rgba(255,255,255,0.05))`
                                            : undefined,
                                        transformStyle: 'preserve-3d'
                                    }}
                                >
                                    {/* Animated Border Glow */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl"
                                        style={{
                                            background: `linear-gradient(45deg, ${exp.color}20, transparent, ${exp.color}20)`,
                                            backgroundSize: '200% 200%'
                                        }}
                                        animate={{
                                            backgroundPosition: hoveredCard === exp.slug
                                                ? ['0% 0%', '100% 100%', '0% 0%']
                                                : '0% 0%'
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />

                                    {/* Company Logo */}
                                    <motion.div
                                        className="relative mb-6"
                                        animate={{
                                            scale: hoveredCard === exp.slug ? 1.1 : 1,
                                            rotate: hoveredCard === exp.slug ? 5 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {exp.logo ? (
                                            <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/10 border border-white/20 overflow-hidden">
                                                <Image
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    width={48}
                                                    height={48}
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div
                                                className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-white"
                                                style={{ backgroundColor: exp.color }}
                                            >
                                                {exp.company.split(' ').map(word => word[0]).join('')}
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Role & Company */}
                                        <motion.h3
                                            className="text-xl font-bold mb-2"
                                            animate={{
                                                color: hoveredCard === exp.slug ? exp.color : undefined
                                            }}
                                        >
                                            {exp.role}
                                        </motion.h3>
                                        <p className="text-brand font-semibold mb-3">{exp.company}</p>

                                        {/* Period & Location */}
                                        <div className="flex items-center gap-4 mb-4 text-sm text-muted">
                                            <span className="flex items-center gap-1">
                                                <span className="w-2 h-2 bg-brand rounded-full" />
                                                {exp.duration}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="w-2 h-2 bg-brand/60 rounded-full" />
                                                {exp.location}
                                            </span>
                                        </div>

                                        {/* Brief Description */}
                                        <p className="text-muted mb-6 leading-relaxed">{exp.description}</p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.slice(0, 3).map((skill, skillIndex) => (
                                                <motion.span
                                                    key={skill}
                                                    className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: skillIndex * 0.1 }}
                                                    whileHover={{
                                                        scale: 1.05,
                                                        backgroundColor: `${exp.color}20`
                                                    }}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                            {exp.skills.length > 3 && (
                                                <span className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5">
                                                    +{exp.skills.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        {/* Hover Indicator */}
                                        <motion.div
                                            className="absolute bottom-4 right-4 text-brand"
                                            animate={{
                                                x: hoveredCard === exp.slug ? 5 : 0,
                                                opacity: hoveredCard === exp.slug ? 1 : 0.6
                                            }}
                                        >
                                            →
                                        </motion.div>
                                    </div>

                                    {/* Floating Particles */}
                                    <motion.div
                                        className="absolute top-4 right-4 w-1 h-1 bg-brand/60 rounded-full"
                                        animate={{
                                            y: [0, -10, 0],
                                            opacity: [0.6, 1, 0.6]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                    />
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.p
                        className="text-muted mb-6"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        Click on any experience to dive deeper into my role and achievements
                    </motion.p>
                    <motion.div
                        className="inline-flex items-center gap-2 text-brand cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span>Explore My Journey</span>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}