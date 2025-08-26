"use client";

import { motion } from "framer-motion";
import React from "react";

type Metric = {
    id: string;
    title: string;
    subtitle: string;
    valueLabel: string;
    progress: number; // 0-100
    accent: string; // tailwind color class
    icon: React.ReactNode;
};

const IconAI = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M12 2a5 5 0 0 1 5 5v2h2a3 3 0 1 1 0 6h-2v2a5 5 0 1 1-10 0v-2H5a3 3 0 1 1 0-6h2V7a5 5 0 0 1 5-5Zm-3 7V7a3 3 0 1 1 6 0v2h-6Zm6 2h2a1 1 0 1 1 0 2h-2v-2Zm-8 0H5a1 1 0 1 0 0 2h2v-2Zm0 4h8v2a3 3 0 1 1-6 0v-2Z" />
    </svg>
);

const IconFinance = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M3 3h2v18H3V3Zm16 6h2v12h-2V9ZM11 13h2v8h-2v-8ZM7 17h2v4H7v-4Zm8-8h2v12h-2V9Z" />
    </svg>
);

const IconCode = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M8.59 16.59 4 12l4.59-4.59L10 8.83 6.83 12 10 15.17l-1.41 1.42Zm6.82 0L14 15.17 17.17 12 14 8.83l1.41-1.42L20 12l-4.59 4.59Z" />
    </svg>
);

const IconDeal = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L4 6l8-4 8 4-8 3Zm-6 4 6 3 6-3v6l-6 3-6-3v-6Z" />
    </svg>
);

const metrics: Metric[] = [
    {
        id: "ai",
        title: "AI/ML Impact",
        subtitle: "Modeling & deployment",
        valueLabel: "Shipped 4 production models",
        progress: 78,
        accent: "from-sky-500/25 to-sky-300/10",
        icon: IconAI,
    },
    {
        id: "finance",
        title: "Finance Analysis",
        subtitle: "Valuation & analytics",
        valueLabel: "Cut reporting time 60%",
        progress: 72,
        accent: "from-emerald-500/25 to-emerald-300/10",
        icon: IconFinance,
    },
    {
        id: "code",
        title: "Engineering",
        subtitle: "Full‑stack systems",
        valueLabel: "100% on-time releases",
        progress: 84,
        accent: "from-indigo-500/25 to-indigo-300/10",
        icon: IconCode,
    },
    {
        id: "deals",
        title: "M&A Research",
        subtitle: "Deal diligence",
        valueLabel: "Benchmarked 12 comps",
        progress: 65,
        accent: "from-amber-500/25 to-amber-300/10",
        icon: IconDeal,
    },
];

export default function ProfessionalMetrics() {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {metrics.map((m, idx) => (
                    <motion.div
                        key={m.id}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: idx * 0.06 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative overflow-hidden rounded-lg border border-white/12 bg-[--panel] p-4 shadow-sm"
                    >
                        <div className={`absolute inset-0 -z-10 animate-[gradientShift_8s_ease_infinite] bg-gradient-to-br ${m.accent}`} />
                        <div className="flex items-center gap-2 text-[--text]">
                            <span className="inline-flex items-center justify-center rounded-md bg-white/10 text-white/90 p-2">
                                {m.icon}
                            </span>
                            <div className="leading-tight">
                                <h3 className="text-sm font-semibold tracking-tight">{m.title}</h3>
                                <p className="text-xs text-[--muted]">{m.subtitle}</p>
                            </div>
                        </div>

                        <div className="mt-3 text-xs text-[--muted]">{m.valueLabel}</div>

                        <div className="mt-2 h-2 w-full rounded-full bg-white/12">
                            <motion.div
                                className="h-2 rounded-full bg-[--brand]"
                                style={{ width: `${m.progress}%` }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${m.progress}%` }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
