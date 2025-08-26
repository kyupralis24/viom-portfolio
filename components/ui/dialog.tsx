'use client'
import { useEffect } from 'react'
export function DialogRoot({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])
    if (!open) return null
    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6" onClick={onClose}>
            <div className="max-w-2xl w-full rounded-2xl border border-white/10 bg-panel p-6" onClick={e => e.stopPropagation()}>{children}</div>
        </div>
    )
}