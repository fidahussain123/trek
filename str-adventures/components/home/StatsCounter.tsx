'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from '@/components/ui/ScrollReveal'

const stats = [
    { value: 3200, suffix: '+', label: 'Happy Trekkers', icon: '🎒' },
    { value: 8, suffix: '', label: 'Curated Routes', icon: '🗺️' },
    { value: 6153, suffix: 'm', label: 'Highest Summit', icon: '⛰️' },
    { value: 7, suffix: '+', label: 'Years of Experience', icon: '🏕️' },
]

function Counter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0)
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (!inView || hasAnimated.current) return
        hasAnimated.current = true

        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
            current += increment
            if (current >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, duration / steps)

        return () => clearInterval(timer)
    }, [inView, target])

    return (
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            {count.toLocaleString('en-IN')}{suffix}
        </span>
    )
}

export default function StatsCounter() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

    return (
        <section ref={ref} className="relative py-24 bg-peak overflow-hidden">
            {/* Subtle gradient accents */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <ScrollReveal key={stat.label} delay={i * 0.1}>
                            <div className="text-center">
                                <span className="text-4xl mb-4 block">{stat.icon}</span>
                                <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
                                <p className="mt-2 text-white/50 text-sm tracking-wide uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
                                    {stat.label}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
