'use client'
import { useEffect, useRef } from 'react'
import { SKILLS } from '@/lib/data'

export default function SkillsTerminal() {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const bars = el.querySelectorAll('.bar') as NodeListOf<HTMLElement>
        bars.forEach((bar, i) => {
            setTimeout(() => {
                bar.style.width = `${SKILLS[i].level}%`
            }, i * 80)
        })
    }, [])

    return (
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-2xl font-semibold mb-8">Skills</h2>
            <div className="rounded-2xl bg-panel/80 border border-white/10 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
                    <span className="size-3 rounded-full bg-red-500/70" />
                    <span className="size-3 rounded-full bg-yellow-500/70" />
                    <span className="size-3 rounded-full bg-green-500/70" />
                    <span className="ml-3 text-sm text-muted">viom@skills:~</span>
                </div>
                <div ref={ref} className="p-6 font-mono text-sm">
                    {SKILLS.map(s => (
                        <div key={s.name} className="mb-3">
                            <div className="flex justify-between">
                                <span>{s.name}</span>
                                <span className="text-muted">{s.level}%</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded">
                                <div className="bar h-1.5 bg-brand rounded w-0" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}