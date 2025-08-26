import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const variants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm transition border',
    {
        variants: {
            variant: {
                solid: 'bg-brand/20 hover:bg-brand/30 border-brand/40',
                outline: 'bg-transparent hover:bg-white/5 border-white/15',
            },
            size: {
                sm: 'h-8 px-3',
                md: 'h-10 px-4',
                lg: 'h-12 px-6'
            }
        },
        defaultVariants: { variant: 'outline', size: 'md' }
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> { }

export function Button({ className, variant, size, ...props }: ButtonProps) {
    return <button className={cn(variants({ variant, size }), className)} {...props} />
}