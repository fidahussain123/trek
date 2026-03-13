'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { Play, ChevronRight } from 'lucide-react'

const stats = [
    { icon: '🏔', label: '8 Curated Routes' },
    { icon: '✦', label: '3000+ Happy Trekkers' },
    { icon: '⛰', label: '6153m Highest Peak' },
    { icon: '★', label: '4.9/5 Average Rating' },
]

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 700], [0, 200])
    const opacity = useTransform(scrollY, [0, 500], [1, 0])
    const scale = useTransform(scrollY, [0, 700], [1, 1.1])
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    return (
        <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden">
            {/* Background Image with Ken Burns */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0"
            >
                <div
                    className="absolute inset-0 animate-ken-burns"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1626621331169-5f34be280ed9?auto=format&fit=crop&w=1920&q=80')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-peak via-peak/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-peak/60 to-transparent" />

            {/* Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
            >
                <div className="max-w-3xl">
                    {/* Label */}
                    {mounted && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <span
                                className="inline-block px-4 py-1.5 text-[11px] tracking-[0.3em] uppercase text-gold border border-gold/30 rounded-full mb-6"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Kashmir & Ladakh · Est. 2018
                            </span>
                        </motion.div>
                    )}

                    {/* Heading */}
                    {mounted && (
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95]"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            <span className="text-lg sm:text-xl md:text-2xl font-light text-white/70 block mb-2">
                                Treks That
                            </span>
                            <span className="italic">Take Your</span>
                            <br />
                            <span className="text-gradient-saffron italic">Breath Away</span>
                        </motion.h1>
                    )}

                    {/* Subtitle */}
                    {mounted && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="mt-6 text-lg md:text-xl text-white/60 max-w-lg leading-relaxed"
                        >
                            <span className="text-white font-medium">Sky. Terrain. Rapids.</span>{' '}
                            Experience the last true wilderness on Earth with expert Kashmiri & Ladakhi guides.
                        </motion.p>
                    )}

                    {/* CTAs */}
                    {mounted && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <Link href="/treks">
                                <Button variant="primary" size="lg">
                                    Explore All Treks
                                    <ChevronRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Button variant="ghost" size="lg">
                                <Play className="w-5 h-5" />
                                Watch Our Story
                            </Button>
                        </motion.div>
                    )}
                </div>
            </motion.div>

            {/* Bottom Ticker */}
            {mounted && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-0 left-0 right-0 bg-peak/80 backdrop-blur-sm border-t border-white/10"
                >
                    <div className="overflow-hidden py-4">
                        <div className="animate-ticker flex whitespace-nowrap">
                            {[...stats, ...stats, ...stats].map((stat, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-2 mx-8 text-sm text-white/70"
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    <span className="text-lg">{stat.icon}</span>
                                    {stat.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    )
}
