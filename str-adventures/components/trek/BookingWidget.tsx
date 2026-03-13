'use client'

import { Calendar, Users, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import type { Trek } from '@/lib/data/treks'

export default function BookingWidget({ trek }: { trek: Trek }) {
    const departureDate = new Date(trek.nextDeparture)
    const formattedDate = departureDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })

    return (
        <div className="sticky top-24 bg-white rounded-2xl border border-glacier shadow-lg shadow-black/5 overflow-hidden">
            {/* Price Header */}
            <div className="bg-peak p-6">
                <p className="text-white/50 text-sm mb-1">Starting from</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                        ₹{trek.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-white/50 text-sm">/ person</span>
                </div>
            </div>

            {/* Details */}
            <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-saffron" />
                    <div>
                        <p className="font-medium text-peak">Next Departure</p>
                        <p className="text-stone">{formattedDate}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-saffron" />
                    <div>
                        <p className="font-medium text-peak">Group Size</p>
                        <p className="text-stone">{trek.groupSize.min}–{trek.groupSize.max} trekkers</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-saffron" />
                    <div>
                        <p className="font-medium text-peak">Duration</p>
                        <p className="text-stone">{trek.duration} Days, {trek.duration - 1} Nights</p>
                    </div>
                </div>

                <div className="border-t border-glacier pt-4 space-y-3">
                    <Button variant="primary" size="lg" className="w-full">
                        Book This Trek
                    </Button>
                    <a
                        href={`https://wa.me/919876543210?text=Hi! I'm interested in the ${trek.name} trek.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-pine border border-pine/20 rounded-lg hover:bg-pine/5 transition-colors"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Chat on WhatsApp
                    </a>
                </div>

                <p className="text-[11px] text-stone text-center">
                    No payment required to enquire. Free cancellation up to 7 days before departure.
                </p>
            </div>
        </div>
    )
}
