'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import TrekCard from '@/components/trek/TrekCard'
import { getFeaturedTreks } from '@/lib/data/treks'

export default function FeaturedTreks() {
    const featured = getFeaturedTreks()

    return (
        <section className="py-24 bg-snow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-saffron border border-saffron/20 rounded-full mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                            Iconic Routes
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-peak" style={{ fontFamily: 'var(--font-display)' }}>
                            Handpicked by our
                            <span className="italic text-saffron"> Guides</span>
                        </h2>
                        <p className="mt-4 text-stone max-w-2xl mx-auto">
                            Every route has been personally scouted, tested, and refined by our team of Kashmiri and Ladakhi guides.
                        </p>
                    </div>
                </ScrollReveal>

                {/* 2-column grid on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featured.map((trek, i) => (
                        <ScrollReveal key={trek.id} delay={i * 0.08}>
                            <TrekCard trek={trek} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
