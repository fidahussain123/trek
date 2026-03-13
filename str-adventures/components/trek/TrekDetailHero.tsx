import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import { MapPin, Mountain, Clock } from 'lucide-react'
import type { Trek } from '@/lib/data/treks'

export default function TrekDetailHero({ trek }: { trek: Trek }) {
    const difficultyVariant = trek.difficulty.toLowerCase() as 'easy' | 'moderate' | 'difficult' | 'extreme'

    return (
        <section className="relative h-[60vh] min-h-[450px] md:h-[70vh]">
            <Image
                src={trek.images.hero}
                alt={trek.name}
                fill
                className="object-cover"
                priority
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-peak via-peak/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-peak/50 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant={trek.region as 'kashmir' | 'ladakh'}>
                        {trek.region === 'kashmir' ? '🌲 Kashmir' : '🏔 Ladakh'}
                    </Badge>
                    <Badge variant={difficultyVariant}>{trek.difficulty}</Badge>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    {trek.name}
                </h1>
                <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-6 italic" style={{ fontFamily: 'var(--font-display)' }}>
                    {trek.tagline}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
                    <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-saffron" />
                        {trek.duration} Days
                    </span>
                    <span className="flex items-center gap-2">
                        <Mountain className="w-4 h-4 text-saffron" />
                        {trek.maxAltitude}m Max Altitude
                    </span>
                    <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-saffron" />
                        {trek.distance} km Total
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="text-gold">★</span>
                        {trek.rating} ({trek.reviewCount} reviews)
                    </span>
                </div>
            </div>
        </section>
    )
}
