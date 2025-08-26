import { cn } from '@/lib/utils'
export function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn('rounded-2xl border border-white/10 bg-panel/70', className)}>{children}</div>
}