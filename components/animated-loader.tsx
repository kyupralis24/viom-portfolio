'use client'
import { useEffect, useRef, useState } from 'react'
export default function AnimatedLoader() {
    const [done, setDone] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const dots = el.querySelectorAll('.dot') as NodeListOf<HTMLElement>

        let loopCount = 0
        const animate = () => {
            dots.forEach((dot, i) => {
                setTimeout(() => {
                    dot.style.transform = 'translateY(-8px)'
                    setTimeout(() => {
                        dot.style.transform = 'translateY(0)'
                    }, 300)
                }, i * 120)
            })

            loopCount++
            if (loopCount < 6) {
                setTimeout(animate, 1200)
            } else {
                setTimeout(() => setDone(true), 1200)
            }
        }

        animate()
    }, [])

    if (done) return null

    return (
        <div className="fixed inset-0 z-[9999] grid place-items-center bg-bg">
            <div ref={ref} className="flex gap-2">
                <span className="dot size-2 rounded-full bg-brand" />
                <span className="dot size-2 rounded-full bg-brand" />
                <span className="dot size-2 rounded-full bg-brand" />
            </div>
        </div>
    )
}
