'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight } from 'lucide-react'

const regionData = [
    {
        name: 'Kashmir',
        slug: 'kashmir',
        tagline: 'The Paradise',
        treks: 4,
        image: 'https://images.unsplash.com/photo-1626621331169-5f34be280ed9?auto=format&fit=crop&w=1200&q=80',
        color: 'from-pine/80',
        features: ['Glacial Lakes', 'Alpine Meadows', 'Pine Forests'],
    },
    {
        name: 'Ladakh',
        slug: 'ladakh',
        tagline: 'The High Desert',
        treks: 4,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
        color: 'from-sky/80',
        features: ['High Passes', 'Ancient Monasteries', 'Frozen Rivers'],
    },
]

export default function RegionsSection() {
    return (
        <section className="py-24 bg-glacier">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-saffron border border-saffron/20 rounded-full mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                            Two Worlds
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-peak" style={{ fontFamily: 'var(--font-display)' }}>
                            Choose Your
                            <span className="italic text-saffron"> Landscape</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {regionData.map((region, i) => (
                        <ScrollReveal key={region.slug} delay={i * 0.15}>
                            <Link href={`/regions/${region.slug}`} className="group block">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden"
                                >
                                    <Image
                                        src={region.image}
                                        alt={`${region.name} Region`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />

                                    {/* Color overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${region.color} via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                                        <span className="text-sm text-white/60 tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                                            {region.tagline}
                                        </span>
                                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                            {region.name}
                                        </h3>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {region.features.map((f) => (
                                                <span key={f} className="px-3 py-1 text-xs bg-white/10 backdrop-blur-sm text-white/80 rounded-full border border-white/10">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-white/70 text-sm">{region.treks} Treks Available</span>
                                            <span className="flex items-center gap-2 text-saffron font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Explore Region <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
