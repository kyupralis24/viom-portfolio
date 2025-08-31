'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { EXPERIENCE } from '@/lib/data'

interface ExperienceDetailProps {
    experience: typeof EXPERIENCE[0]
}

export default function ExperienceDetail({ experience }: ExperienceDetailProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>
    }

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-panel/50 via-transparent to-panel/30" />

            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 left-20 w-4 h-4 bg-brand/20 rounded-full"
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-6 h-6 bg-brand/30 rounded-full"
                animate={{
                    y: [0, 30, 0],
                    x: [0, -20, 0],
                    scale: [1, 0.8, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        href="/#experience"
                        className="inline-flex items-center gap-2 text-brand hover:text-brand/80 transition-colors mb-8 group"
                    >
                        <motion.span
                            animate={{ x: [0, -5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            ←
                        </motion.span>
                        <span className="group-hover:underline">Back to Experience</span>
                    </Link>
                </motion.div>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    {/* Company Logo */}
                    <motion.div
                        className="inline-block mb-8"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {experience.logo ? (
                            <div className="w-40 h-24 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg px-4">
                                <Image
                                    src={experience.logo}
                                    alt={`${experience.company} logo`}
                                    width={120}
                                    height={60}
                                    className="object-contain max-w-full max-h-full"
                                />
                            </div>
                        ) : (
                            <div
                                className="w-32 h-32 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-lg"
                                style={{ backgroundColor: experience.color }}
                            >
                                {experience.company.split(' ').map(word => word[0]).join('')}
                            </div>
                        )}
                    </motion.div>

                    <h1 className="text-5xl font-bold mb-4">{experience.role}</h1>
                    <h2 className="text-2xl text-brand font-semibold mb-4">{experience.company}</h2>

                    <div className="flex items-center justify-center gap-6 text-muted mb-8">
                        <span className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-brand rounded-full" />
                            {experience.duration}
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-brand/60 rounded-full" />
                            {experience.location}
                        </span>
                    </div>

                    <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                        {experience.description}
                    </p>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center">Key Skills & Technologies</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {experience.skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium cursor-glow"
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: `${experience.color}20`,
                                    borderColor: experience.color
                                }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-semibold mb-8 text-center">Key Achievements & Responsibilities</h3>
                    <div className="space-y-6">
                        {experience.achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                                className="flex items-start gap-4 p-6 rounded-xl glass border border-white/10 hover:border-white/20 transition-all duration-300 cursor-glow"
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: `${experience.color}05`
                                }}
                            >
                                <motion.div
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 mt-1"
                                    style={{ backgroundColor: experience.color }}
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {index + 1}
                                </motion.div>
                                <p className="text-lg leading-relaxed">{achievement}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Impact Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-semibold mb-8 text-center">Impact & Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: 'Projects Led', value: '5+', icon: '🚀' },
                            { label: 'Team Size', value: '8-12', icon: '👥' },
                            { label: 'Efficiency Gain', value: '40%', icon: '📈' }
                        ].map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                                className="text-center p-6 rounded-xl glass border border-white/10"
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="text-4xl mb-3">{metric.icon}</div>
                                <div className="text-3xl font-bold text-brand mb-2">{metric.value}</div>
                                <div className="text-muted">{metric.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Navigation to Other Experiences */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-semibold mb-8">Explore Other Experiences</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {EXPERIENCE.filter(exp => exp.slug !== experience.slug).map((exp, index) => (
                            <motion.div
                                key={exp.slug}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                            >
                                <Link href={`/experience/${exp.slug}`}>
                                    <div
                                        className="px-6 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-glow"
                                        style={{
                                            borderColor: exp.color,
                                            backgroundColor: `${exp.color}10`
                                        }}
                                    >
                                        <div className="font-semibold">{exp.role}</div>
                                        <div className="text-sm text-muted">{exp.company}</div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
