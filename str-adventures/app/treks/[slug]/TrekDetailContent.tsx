'use client'

import { useState } from 'react'
import TrekDetailHero from '@/components/trek/TrekDetailHero'
import TrekItinerary from '@/components/trek/TrekItinerary'
import TrekGallery from '@/components/trek/TrekGallery'
import BookingWidget from '@/components/trek/BookingWidget'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Badge from '@/components/ui/Badge'
import { Check, X, Backpack, Calendar, MapPin, Star } from 'lucide-react'
import type { Trek } from '@/lib/data/treks'

const tabs = ['Overview', 'Itinerary', 'Inclusions', 'Gallery']

export default function TrekDetailContent({ trek }: { trek: Trek }) {
    const [activeTab, setActiveTab] = useState('Overview')

    return (
        <div>
            <TrekDetailHero trek={trek} />

            {/* Sticky Tab Navigation */}
            <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-xl border-b border-glacier">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-0 overflow-x-auto pb-1 scrollbar-hide snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all snap-start ${activeTab === tab
                                    ? 'border-saffron text-saffron'
                                    : 'border-transparent text-stone hover:text-peak hover:border-glacier'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content + Sidebar */}
            <section className="py-12 bg-snow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <div className="flex-1 min-w-0">
                            {activeTab === 'Overview' && (
                                <ScrollReveal>
                                    <div className="space-y-10">
                                        {/* Highlights */}
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-peak mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                                Trek <span className="italic text-saffron">Highlights</span>
                                            </h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {trek.highlights.map((h) => (
                                                    <div key={h} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-glacier">
                                                        <div className="w-6 h-6 rounded-full bg-saffron/10 flex items-center justify-center shrink-0 mt-0.5">
                                                            <Check className="w-3.5 h-3.5 text-saffron" />
                                                        </div>
                                                        <span className="text-sm text-peak">{h}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* At a Glance */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                            {[
                                                { icon: Calendar, label: 'Duration', value: `${trek.duration} Days` },
                                                { icon: MapPin, label: 'Start → End', value: `${trek.startPoint} → ${trek.endPoint}` },
                                                { icon: Star, label: 'Rating', value: `${trek.rating}/5 (${trek.reviewCount})` },
                                                { icon: Calendar, label: 'Best Months', value: trek.bestMonths.slice(0, 2).join(', ') },
                                            ].map(({ icon: Icon, label, value }) => (
                                                <div key={label} className="p-4 bg-white rounded-xl border border-glacier text-center">
                                                    <Icon className="w-5 h-5 text-saffron mx-auto mb-2" />
                                                    <p className="text-xs text-stone uppercase tracking-wider mb-1">{label}</p>
                                                    <p className="text-sm font-medium text-peak">{value}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {trek.tags.map((tag) => (
                                                <Badge key={tag} variant="default" className="bg-glacier text-peak">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            )}

                            {activeTab === 'Itinerary' && (
                                <ScrollReveal>
                                    <TrekItinerary trek={trek} />
                                </ScrollReveal>
                            )}

                            {activeTab === 'Inclusions' && (
                                <ScrollReveal>
                                    <div className="space-y-10">
                                        {/* Inclusions */}
                                        <div>
                                            <h2 className="text-2xl font-bold text-peak mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                                What&apos;s <span className="italic text-saffron">Included</span>
                                            </h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {trek.inclusions.map((item) => (
                                                    <div key={item} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                                                        <Check className="w-4 h-4 text-green-600 shrink-0" />
                                                        <span className="text-sm text-peak">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Exclusions */}
                                        <div>
                                            <h2 className="text-2xl font-bold text-peak mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                                What&apos;s <span className="italic text-red-500">Not Included</span>
                                            </h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {trek.exclusions.map((item) => (
                                                    <div key={item} className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
                                                        <X className="w-4 h-4 text-red-500 shrink-0" />
                                                        <span className="text-sm text-peak">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Things to Carry */}
                                        <div>
                                            <h2 className="text-2xl font-bold text-peak mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                                Things to <span className="italic text-saffron">Carry</span>
                                            </h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {trek.thingsToCarry.map((item) => (
                                                    <div key={item} className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
                                                        <Backpack className="w-4 h-4 text-amber-600 shrink-0" />
                                                        <span className="text-sm text-peak">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            )}

                            {activeTab === 'Gallery' && (
                                <ScrollReveal>
                                    <TrekGallery images={trek.images.gallery} trekName={trek.name} />
                                </ScrollReveal>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="w-full lg:w-[360px] shrink-0">
                            <BookingWidget trek={trek} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
