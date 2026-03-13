import Link from 'next/link'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import { Clock, Mountain, MapPin } from 'lucide-react'
import type { Trek } from '@/lib/data/treks'

interface TrekCardProps {
    trek: Trek
    variant?: 'default' | 'large' | 'wide'
}

export default function TrekCard({ trek, variant = 'default' }: TrekCardProps) {
    const difficultyVariant = trek.difficulty.toLowerCase() as 'easy' | 'moderate' | 'difficult' | 'extreme'
    const regionVariant = trek.region as 'kashmir' | 'ladakh'

    return (
        <Link href={`/treks/${trek.slug}`} className="group block">
            <div
                className={`relative overflow-hidden rounded-2xl ${variant === 'large' ? 'h-[500px] md:h-full' : variant === 'wide' ? 'h-[300px]' : 'h-[380px]'
                    }`}
            >
                {/* Image */}
                <Image
                    src={trek.images.thumbnail}
                    alt={trek.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant={regionVariant}>
                        {trek.region === 'kashmir' ? '🌲 Kashmir' : '🏔 Ladakh'}
                    </Badge>
                    <Badge variant={difficultyVariant}>{trek.difficulty}</Badge>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3
                        className={`font-bold text-white leading-tight mb-2 ${variant === 'large' ? 'text-2xl md:text-3xl' : 'text-xl'}`}
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {trek.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">{trek.tagline}</p>

                    {/* Stats Row */}
                    <div className="flex items-center gap-4 text-white/70 text-xs mb-4">
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {trek.duration} Days
                        </span>
                        <span className="flex items-center gap-1">
                            <Mountain className="w-3.5 h-3.5" />
                            {trek.maxAltitude}m
                        </span>
                        <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {trek.distance} km
                        </span>
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-white/50 text-xs">Starting from</span>
                            <p className="text-white font-bold text-lg">
                                ₹{trek.price.toLocaleString('en-IN')}
                                <span className="text-white/50 text-xs font-normal"> /person</span>
                            </p>
                        </div>
                        <span className="text-saffron text-sm font-medium opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-1">
                            View Trek →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
