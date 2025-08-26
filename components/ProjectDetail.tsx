"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Project } from '@/lib/data'

interface ProjectDetailProps {
    project: Project
}

const categoryAccent: Record<Project['category'], { tint: string; ring: string; bg: string }> = {
    ai: { tint: '#10b981', ring: 'ring-green-400/30', bg: 'from-emerald-500/10' },
    finance: { tint: '#f59e0b', ring: 'ring-amber-400/30', bg: 'from-amber-500/10' },
    strategy: { tint: '#8b5cf6', ring: 'ring-violet-400/30', bg: 'from-violet-500/10' },
    product: { tint: '#ef4444', ring: 'ring-rose-400/30', bg: 'from-rose-500/10' },
    coding: { tint: '#06b6d4', ring: 'ring-cyan-400/30', bg: 'from-cyan-500/10' },
}

const IconTool = (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M21.7 13.35a4.5 4.5 0 0 1-6.36 6.36l-7.07-7.07a4.5 4.5 0 0 1 6.36-6.36l1.41 1.41-2.12 2.12 6.78 6.78Z" />
    </svg>
)
const IconWand = (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M4 20 20 4l-2-2L2 18l2 2Zm11-14 3 3 2-2-3-3-2 2ZM7 22l3-3-1-1-3 3 1 1Zm10-3 3-3-1-1-3 3 1 1Z" />
    </svg>
)

export default function ProjectDetail({ project }: ProjectDetailProps) {
    const title = project.title || 'Untitled Project'
    const description = project.description || 'A brief description will go here.'
    const overview = project.overview || 'Overview content placeholder. Summarize problem, approach, and outcome.'
    const tech = project.tech || 'Tech stack placeholder'
    const results = project.results || 'Key results placeholder'
    const lessons = project.lessons || 'Key learnings placeholder'

    const techTags = tech.split(',').map(t => t.trim()).filter(Boolean)
    const accent = categoryAccent[project.category]

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Category background glow */}
            <div className={`absolute inset-0 bg-gradient-to-b ${accent.bg} via-transparent to-transparent`} />

            <div className="relative max-w-5xl mx-auto px-6 z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-muted">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent.tint }} />
                            <span>{project.category.toUpperCase()}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
                        <p className="text-lg text-muted max-w-3xl mx-auto">{description}</p>
                    </div>

                    {/* AI Tools used row */}
                    <div className="flex items-center justify-between rounded-xl glass border border-white/10 px-4 py-3">
                        <span className="text-sm text-muted">AI tools used:</span>
                        <div className="flex items-center gap-2 text-white/80">
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-white/10">{IconTool}</span>
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-white/10">{IconWand}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Meta Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                    <div className={`p-5 rounded-xl glass border border-white/10 ring-1 ${accent.ring}`}>
                        <div className="text-sm text-muted mb-1">Overview</div>
                        <div className="text-white/90">{overview}</div>
                    </div>
                    <div className={`p-5 rounded-xl glass border border-white/10 ring-1 ${accent.ring}`}>
                        <div className="text-sm text-muted mb-2">Technology</div>
                        <div className="flex flex-wrap gap-2">
                            {techTags.length ? techTags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs text-muted border border-white/10">{tag}</span>
                            )) : <span className="text-muted">Add stack here</span>}
                        </div>
                    </div>
                    <div className={`p-5 rounded-xl glass border border-white/10 ring-1 ${accent.ring}`}>
                        <div className="text-sm text-muted mb-1">Results</div>
                        <div className="text-white/90">{results}</div>
                    </div>
                </motion.div>

                {/* Main Content Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-6 rounded-2xl glass-strong border border-white/10"
                    >
                        <h3 className="text-xl font-semibold mb-3">Problem & Context</h3>
                        <p className="text-muted leading-relaxed">
                            Placeholder: Describe the business problem, constraints, and success criteria.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="p-6 rounded-2xl glass-strong border border-white/10"
                    >
                        <h3 className="text-xl font-semibold mb-3">Approach & Architecture</h3>
                        <p className="text-muted leading-relaxed">
                            Placeholder: Outline data sources, ML/quant models, experiments, and system design.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="p-6 rounded-2xl glass-strong border border-white/10"
                    >
                        <h3 className="text-xl font-semibold mb-3">Outcomes</h3>
                        <p className="text-muted leading-relaxed">
                            {results} — Placeholder: quantify impact (accuracy, ROI, speedup, adoption).
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="p-6 rounded-2xl glass-strong border border-white/10"
                    >
                        <h3 className="text-xl font-semibold mb-3">Key Learnings</h3>
                        <p className="text-muted leading-relaxed">
                            {lessons} — Placeholder: tradeoffs made, insights, and future improvements.
                        </p>
                    </motion.div>
                </div>

                {/* Gallery / Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-12"
                >
                    <div className="rounded-2xl overflow-hidden border border-white/10 glass">
                        <div className="aspect-video grid place-items-center text-muted">
                            Add screenshots or a short demo here
                        </div>
                    </div>
                </motion.div>

                {/* Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="flex flex-wrap gap-3"
                >
                    <Link href="/projects" className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
                        Back to Projects
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
