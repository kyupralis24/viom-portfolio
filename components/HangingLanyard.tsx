'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface HangingLanyardProps {
    photoSrc?: string
    name?: string
    role?: string
}

export default function HangingLanyard({
    photoSrc = '/placeholder-headshot.jpg',
    name = 'Viom Kapur',
    role = 'AI Engineer · Finance'
}: HangingLanyardProps) {
    return (
        <div className="relative select-none" aria-hidden>
            {/* Rope */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-24 bg-white/30"
                style={{ transformOrigin: 'top center' }}
                animate={{ rotate: [0, 2.5, 0, -2.5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Badge */}
            <motion.div
                className="relative mt-24 w-[220px] rounded-xl border border-white/15 bg-white/10 backdrop-blur p-3 shadow-lg"
                style={{ transformOrigin: 'top center' }}
                animate={{ rotate: [0, 3, 0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
                {/* Clip */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2 rounded bg-white/30" />

                <div className="relative w-full h-[140px] rounded-lg overflow-hidden border border-white/10">
                    <Image src={photoSrc} alt={name} fill className="object-cover" />
                </div>
                <div className="mt-3">
                    <div className="text-sm font-semibold">{name}</div>
                    <div className="text-xs text-white/70">{role}</div>
                </div>
            </motion.div>
        </div>
    )
}


