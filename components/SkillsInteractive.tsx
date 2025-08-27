'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

interface Skill {
    name: string
    level: number
    category: string
    icon: React.ReactNode
    color: string
    description: string
}

const IconBrain = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M8 3a3 3 0 0 0-3 3v2a3 3 0 0 0 0 6v2a3 3 0 0 0 6 0V4a1 1 0 0 0-1-1H8Zm8 0h-2a1 1 0 0 0-1 1v12a3 3 0 0 0 6 0v-2a3 3 0 0 0 0-6V6a3 3 0 0 0-3-3Z" />
    </svg>
)
const IconChart = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M3 3h2v18H3V3Zm4 10h2v8H7v-8Zm4-6h2v14h-2V7Zm4 4h2v10h-2V11Zm4-6h2v16h-2V5Z" />
    </svg>
)
const IconEye = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M12 5c-5.5 0-9.5 5-10 6 .5 1 4.5 6 10 6s9.5-5 10-6c-.5-1-4.5-6-10-6Zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
    </svg>
)
const IconChat = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 3V6a2 2 0 0 1 2-2Z" />
    </svg>
)
const IconPython = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M9 3h6a3 3 0 0 1 3 3v3H9a3 3 0 0 0-3 3v1H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h3Zm6 18H9a3 3 0 0 1-3-3v-3h9a3 3 0 0 0 3-3v-1h0a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3" />
    </svg>
)
const IconJS = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M3 3h18v18H3V3Zm9 4h2v8.5a2.5 2.5 0 1 1-5 0h2a.5.5 0 1 0 1 0V7Zm-5 9.5a2.5 2.5 0 0 0 4 2l-1-1.73a.5.5 0 0 1-.86.04.5.5 0 0 1 .04-.54c.42-.62 1.82-.8 1.82-2.27 0-1.2-1.02-2-2.5-2-1.34 0-2.5.73-2.5 2h2c0-.4.42-.5.5-.5.28 0 .5.14.5.5 0 .44-.66.63-1.18 1.06-.54.45-.82 1.04-.82 1.94Z" />
    </svg>
)
const IconDB = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M12 2C7 2 3 3.79 3 6v12c0 2.21 4 4 9 4s9-1.79 9-4V6c0-2.21-4-4-9-4Zm0 2c4.42 0 7 .99 7 2s-2.58 2-7 2-7-.99-7-2 2.58-2 7-2Zm0 6c4.42 0 7-.99 7-2v3c0 1.01-2.58 2-7 2s-7-.99-7-2V8c0 1.01 2.58 2 7 2Zm0 5c4.42 0 7-.99 7-2v3c0 1.01-2.58 2-7 2s-7-.99-7-2v-3c0 1.01 2.58 2 7 2Z" />
    </svg>
)
const IconCloud = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M6 18h12a4 4 0 0 0 .5-7.98A6 6 0 0 0 6.2 7.1 5 5 0 1 0 6 18Z" />
    </svg>
)

const skills: Skill[] = [
    // AI/ML Skills
    {
        name: 'Machine Learning',
        level: 95,
        category: 'ai',
        icon: IconBrain,
        color: '#10b981',
        description: 'XGBoost, LSTM, DNN models and algorithms'
    },
    {
        name: 'Deep Learning',
        level: 90,
        category: 'ai',
        icon: IconBrain,
        color: '#10b981',
        description: 'Neural networks, TensorFlow, PyTorch'
    },
    {
        name: 'Data Science',
        level: 92,
        category: 'ai',
        icon: IconChart,
        color: '#10b981',
        description: 'Statistical analysis and predictive modeling'
    },
    {
        name: 'Computer Vision',
        level: 85,
        category: 'ai',
        icon: IconEye,
        color: '#10b981',
        description: 'Image processing and object detection'
    },
    {
        name: 'NLP',
        level: 80,
        category: 'ai',
        icon: IconChat,
        color: '#10b981',
        description: 'Natural language processing and text analysis'
    },

    // Finance Skills
    {
        name: 'Financial Modeling',
        level: 95,
        category: 'finance',
        icon: IconChart,
        color: '#f59e0b',
        description: 'DCF, DDM, comparable company analysis'
    },
    {
        name: 'Portfolio Management',
        level: 90,
        category: 'finance',
        icon: IconChart,
        color: '#f59e0b',
        description: 'Asset allocation and risk management'
    },
    {
        name: 'M&A Analysis',
        level: 88,
        category: 'finance',
        icon: IconChart,
        color: '#f59e0b',
        description: 'Due diligence and deal structuring'
    },
    {
        name: 'Valuation',
        level: 92,
        category: 'finance',
        icon: IconChart,
        color: '#f59e0b',
        description: 'Company and asset valuation'
    },
    {
        name: 'Options Trading',
        level: 85,
        category: 'finance',
        icon: IconChart,
        color: '#f59e0b',
        description: 'Black-Scholes and options strategies'
    },

    // Programming Skills
    {
        name: 'Python',
        level: 95,
        category: 'tech',
        icon: IconPython,
        color: '#06b6d4',
        description: 'Data science, ML, and financial modeling'
    },
    {
        name: 'JavaScript',
        level: 88,
        category: 'tech',
        icon: IconJS,
        color: '#06b6d4',
        description: 'Web development and data visualization'
    },
    {
        name: 'TensorFlow',
        level: 90,
        category: 'tech',
        icon: IconBrain,
        color: '#06b6d4',
        description: 'Deep learning and neural networks'
    },
    {
        name: 'SQL',
        level: 85,
        category: 'tech',
        icon: IconDB,
        color: '#06b6d4',
        description: 'Database management and queries'
    },
    {
        name: 'AWS',
        level: 82,
        category: 'tech',
        icon: IconCloud,
        color: '#06b6d4',
        description: 'Cloud infrastructure and deployment'
    }
]

export default function SkillsInteractive() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
    const [activeCategory, setActiveCategory] = useState<string>('all')

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

    const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeCategory)

    const categories = [
        { id: 'all', name: 'All Skills', icon: IconChart, color: '#6ee7ff' },
        { id: 'ai', name: 'AI/ML', icon: IconBrain, color: '#10b981' },
        { id: 'finance', name: 'Finance', icon: IconChart, color: '#f59e0b' },
        { id: 'tech', name: 'Programming', icon: IconJS, color: '#06b6d4' }
    ]

    return (
        <section ref={containerRef} className="relative py-16 overflow-hidden">
            {/* Minimal background wash */}
            <motion.div style={{ y }} className="absolute inset-0 bg-white/[0.02]" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div style={{ opacity }} className="text-center mb-8">
                    <h2 className="text-2xl font-semibold mb-1">Professional Skills</h2>
                    <p className="text-sm text-muted max-w-xl mx-auto">AI/ML, finance, and engineering</p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 mb-8"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-colors ${activeCategory === category.id
                                ? 'border-brand/60 bg-brand/10 text-brand'
                                : 'border-white/10 bg-white/5 text-muted hover:border-white/20'
                                }`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span className="text-[12px] text-white/80">{category.icon}</span>
                            <span className="font-medium">{category.name}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div style={{ scale, opacity }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.06,
                            }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className="relative group"
                        >
                            {/* Skill Card */}
                            <motion.div
                                className={`relative p-3 rounded-lg bg-white/5 border border-white/10 overflow-hidden h-full`}
                                data-skill={skill.category}
                                style={{ borderColor: hoveredSkill === skill.name ? `${skill.color}40` : undefined }}
                            >
                                <div className="absolute inset-0 -z-10 opacity-10" style={{ background: `radial-gradient(600px 160px at 0% 0%, ${skill.color}22, transparent)` }} />

                                {/* Skill Icon */}
                                <motion.div
                                    className="mb-2 text-white/80"
                                    animate={{ scale: hoveredSkill === skill.name ? 1.05 : 1 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    {skill.icon}
                                </motion.div>

                                {/* Skill Name */}
                                <h3 className="text-base font-semibold mb-1">{skill.name}</h3>

                                {/* Skill Description */}
                                <p className="text-muted text-xs mb-2 leading-relaxed">
                                    {skill.description}
                                </p>

                                {/* Minimal Category Badge */}

                                <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-[10px] font-medium"
                                    style={{
                                        backgroundColor: `${skill.color}18`,
                                        color: skill.color,
                                        border: `1px solid ${skill.color}30`
                                    }}>
                                    <span className="text-white/80">{categories.find(c => c.id === skill.category)?.icon}</span>
                                    {categories.find(c => c.id === skill.category)?.name}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Removed Expertise Summary as requested */}
            </div>
        </section>
    )
}
