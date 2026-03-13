'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Priya Sharma',
        location: 'Mumbai, India',
        trek: 'Kashmir Great Lakes',
        quote: 'Without doubt the best trek I\'ve ever done. The Great Lakes trail is like walking through a painting — every turn reveals something more breathtaking. The STR team was incredibly professional.',
        rating: 5,
        avatar: 'PS',
    },
    {
        name: 'James Mitchell',
        location: 'London, UK',
        trek: 'Chadar Trek',
        quote: 'Walking on a frozen river for 100km sounded insane. It was. But the STR guides made us feel safe every step of the way. The ice caves and frozen waterfalls were surreal. Life-changing experience.',
        rating: 5,
        avatar: 'JM',
    },
    {
        name: 'Aditya Nair',
        location: 'Bangalore, India',
        trek: 'Markha Valley',
        quote: 'The Kongmaru La pass at 5150m was the hardest thing I\'ve ever done, and the most rewarding. STR\'s local Ladakhi guides knew exactly when to push and when to rest. Pure magic.',
        rating: 5,
        avatar: 'AN',
    },
    {
        name: 'Sofia Chen',
        location: 'Singapore',
        trek: 'Tarsar Marsar',
        quote: 'I\'d travelled to 40 countries before this. Kashmir blew them all away. The flower meadows, the crystal lakes, the warmth of the locals — I\'m already planning my return with STR.',
        rating: 5,
        avatar: 'SC',
    },
]

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-peak">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/20 rounded-full mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                            Stories from the Trail
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                            What Trekkers
                            <span className="italic text-saffron"> Say</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((t, i) => (
                        <ScrollReveal key={t.name} delay={i * 0.1}>
                            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-saffron/30 transition-all duration-300 h-full flex flex-col">
                                <Quote className="w-8 h-8 text-saffron/30 mb-4" />
                                <p className="text-white/70 leading-relaxed flex-1 mb-6">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-saffron/20 flex items-center justify-center text-saffron font-bold text-sm">
                                            {t.avatar}
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm">{t.name}</p>
                                            <p className="text-white/40 text-xs">{t.location} · {t.trek}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-0.5">
                                        {Array.from({ length: t.rating }).map((_, j) => (
                                            <Star key={j} className="w-3.5 h-3.5 text-gold fill-gold" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
