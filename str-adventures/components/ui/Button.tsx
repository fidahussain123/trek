import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

export default function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
    const base = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-lg cursor-pointer'

    const variants = {
        primary: 'bg-saffron text-white hover:bg-saffron/90 hover:shadow-lg hover:shadow-saffron/25 active:scale-[0.98]',
        secondary: 'bg-pine text-white hover:bg-pine/90 hover:shadow-lg active:scale-[0.98]',
        ghost: 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm',
        outline: 'border-2 border-saffron text-saffron hover:bg-saffron hover:text-white',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    }

    return (
        <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}
