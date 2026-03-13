interface BadgeProps {
    children: React.ReactNode
    variant?: 'default' | 'kashmir' | 'ladakh' | 'easy' | 'moderate' | 'difficult' | 'extreme'
    className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
    const variants = {
        default: 'bg-white/20 text-white backdrop-blur-sm',
        kashmir: 'bg-pine/90 text-white',
        ladakh: 'bg-sky/90 text-white',
        easy: 'bg-emerald-500/90 text-white',
        moderate: 'bg-amber-500/90 text-white',
        difficult: 'bg-orange-600/90 text-white',
        extreme: 'bg-red-600/90 text-white',
    }

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${variants[variant]} ${className}`}>
            {children}
        </span>
    )
}
