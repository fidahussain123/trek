import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import TrekCard from '@/components/trek/TrekCard'
import { getTreksByRegion } from '@/lib/data/treks'

export const metadata: Metadata = {
    title: 'Ladakh Treks | STR Adventures',
    description: 'Explore the high desert. Trek across frozen rivers, ancient monasteries, and 6000m peaks in Ladakh with STR Adventures.',
}

export default function LadakhPage() {
    const ladakhTreks = getTreksByRegion('ladakh')

    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80"
                    alt="Ladakh Landscape"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-peak via-peak/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-sky/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
                    <ScrollReveal>
                        <span className="inline-block px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/30 rounded-full mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                            The High Desert
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            Ladakh
                        </h1>
                        <p className="text-lg text-white/60 max-w-xl">
                            The land beyond the passes — barren mountains, ancient monasteries, frozen rivers, and air so clear you can see forever.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Info */}
            <section className="py-16 bg-snow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                            {[
                                { label: 'Base City', value: 'Leh' },
                                { label: 'Best Season', value: 'Jun–Sep / Jan–Feb' },
                                { label: 'Treks Available', value: `${ladakhTreks.length} Routes` },
                                { label: 'Highlights', value: 'Passes & Monasteries' },
                            ].map(({ label, value }) => (
                                <div key={label} className="p-5 bg-white rounded-xl border border-glacier text-center">
                                    <p className="text-xs text-stone uppercase tracking-wider mb-1">{label}</p>
                                    <p className="font-bold text-peak" style={{ fontFamily: 'var(--font-display)' }}>{value}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-peak mb-10" style={{ fontFamily: 'var(--font-display)' }}>
                            Ladakh <span className="italic text-saffron">Treks</span>
                        </h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {ladakhTreks.map((trek, i) => (
                            <ScrollReveal key={trek.id} delay={i * 0.1}>
                                <TrekCard trek={trek} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
