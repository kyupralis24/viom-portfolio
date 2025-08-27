'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import TiltedCard from '@/components/ui/TiltedCard'
import { PROJECTS } from '@/lib/data'

const categories = [
  { id: 'all', name: 'All', color: '#6366f1' },
  { id: 'ai', name: 'AI/ML', color: '#10b981' },
  { id: 'finance', name: 'Finance', color: '#f59e0b' },
  { id: 'strategy', name: 'Strategy', color: '#8b5cf6' },
  { id: 'product', name: 'Product', color: '#ef4444' },
  { id: 'coding', name: 'Coding', color: '#06b6d4' }
]

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

function getCategoryColor(category: string) {
  const c = categories.find(c => c.id === category)?.color || '#6ee7ff'
  return c
}

function makeSvgDataUri(category: string, title: string) {
  const color = getCategoryColor(category)
  const bg = '#0a0a0a'
  // simple gradient + subtle grid + a few category-specific shapes
  const shapes = {
    ai: `<circle cx="200" cy="160" r="60" fill="${color}22" />
         <circle cx="270" cy="200" r="8" fill="${color}AA" />
         <circle cx="235" cy="130" r="6" fill="${color}99" />
         <line x1="270" y1="200" x2="235" y2="130" stroke="${color}66" stroke-width="2" />`,
    finance: `<rect x="160" y="160" width="20" height="80" fill="${color}55" rx="2" />
              <rect x="186" y="140" width="20" height="100" fill="${color}88" rx="2" />
              <rect x="212" y="180" width="20" height="60" fill="${color}55" rx="2" />`,
    strategy: `<path d="M160 160 l50 0 l-10 -10 m10 10 l-10 10" stroke="${color}AA" stroke-width="3" fill="none" />
               <path d="M220 190 l40 0 l-10 -10 m10 10 l-10 10" stroke="${color}66" stroke-width="3" fill="none" />`,
    product: `<rect x="150" y="150" width="120" height="70" rx="12" fill="${color}22" stroke="${color}55" />
              <rect x="165" y="165" width="70" height="14" rx="4" fill="${color}77" />`,
    coding: `<text x="160" y="180" font-size="48" fill="${color}AA" font-family="monospace">&lt;/&gt;</text>
             <text x="230" y="210" font-size="18" fill="${color}66" font-family="monospace">{ }</text>`
  } as Record<string, string>

  const grid = Array.from({ length: 12 })
    .map((_, i) => `<line x1="${100 + i * 40}" y1="80" x2="${100 + i * 40}" y2="280" stroke="#ffffff08" stroke-width="1" />`)
    .join('')

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 400 300">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="${bg}"/>
    <rect x="0" y="0" width="400" height="300" fill="url(#g)"/>
    ${grid}
    ${shapes[category] || shapes.ai}
  </svg>`

  const encoded = encodeURIComponent(svg)
  return `data:image/svg+xml;utf8,${encoded}`
}

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const codingProjects = PROJECTS.filter(p => p.category === 'coding')

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-panel/20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Featured Projects Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Strategic initiatives and analytical solutions across AI, finance, and business strategy
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="search"
                  placeholder="Search projects by title, tech, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-xl glass-strong border border-white/10 focus:border-brand/50 focus:outline-none transition-all"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === category.id
                      ? 'bg-brand text-white shadow-lg'
                      : 'bg-white/5 text-muted hover:bg-white/10 hover:text-white'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/projects/${project.slug}`} className="group block">
                  <TiltedCard
                    imageSrc={
                      project.slug === 'credit-card-fraud'
                        ? makeSvgDataUri(project.category, project.title)
                        : (project.image && project.image !== '/placeholder-headshot.jpg'
                          ? project.image
                          : makeSvgDataUri(project.category, project.title))
                    }
                    altText={project.title}
                    captionText={project.title}
                    containerHeight="320px"
                    imageHeight="320px"
                    imageWidth="100%"
                    scaleOnHover={1.08}
                    rotateAmplitude={12}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent
                    overlayContent={(
                      <div className="p-5">
                        {/* Category Badge */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-medium" style={{
                            backgroundColor: `${categories.find(c => c.id === project.category)?.color}20`,
                            color: categories.find(c => c.id === project.category)?.color
                          }}>
                            {project.tags[0]}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-xs text-white/80 mb-3 line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.split(', ').slice(0, 4).map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-black/40 border border-white/10 rounded text-[10px] text-white/80">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                          <span className="text-[10px] text-white/70">AI tools used:</span>
                          <div className="flex items-center gap-2 text-white/90">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-white/10">{IconTool}</span>
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-white/10">{IconWand}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Coding Projects Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Coding Projects</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Software development and programming projects showcasing technical skills and innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {codingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="relative p-6 rounded-2xl glass-strong border border-white/10 hover:border-brand/30 transition-all duration-300 h-full overflow-hidden">
                    <div className="absolute inset-0 -z-10 animate-[gradientShift_10s_ease_infinite] opacity-10 bg-gradient-to-br from-white/10 to-transparent" />
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 mb-4 p-2 bg-black/20 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs text-muted ml-2">{project.id}.{project.category === 'coding' ? 'js' : 'py'}</span>
                    </div>

                    {/* Project Type */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-brand">{/* icon removed for professionalism */}</span>
                      <span className="text-sm text-muted">{project.tags[0]}</span>
                    </div>

                    {/* Project Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold group-hover:text-brand transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Code Preview */}
                      {project.codePreview && (
                        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                          <pre className="text-xs text-green-400 overflow-hidden">
                            <code>{project.codePreview.split('\n').slice(0, 6).join('\n')}</code>
                          </pre>
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.split(', ').map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-muted">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* AI Tools Used */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs text-muted">AI tools used:</span>
                        <div className="flex items-center gap-2 text-white/80">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-white/10">{IconTool}</span>
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-white/10">{IconWand}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
