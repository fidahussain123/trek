'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Mountain } from 'lucide-react'
import type { Trek } from '@/lib/data/treks'

export default function TrekItinerary({ trek }: { trek: Trek }) {
    const [expandedDay, setExpandedDay] = useState<number | null>(1)
    const maxAlt = Math.max(...trek.itinerary.map(d => d.altitude))

    return (
        <div>
            <h2 className="text-2xl md:text-3xl font-bold text-peak mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                Day-by-Day <span className="italic text-saffron">Itinerary</span>
            </h2>

            {/* Altitude mini-chart */}
            <div className="mb-10 p-6 bg-white rounded-2xl border border-glacier">
                <h4 className="text-xs font-semibold text-stone uppercase tracking-wider mb-4">Altitude Profile</h4>
                <div className="flex items-end gap-1 h-32">
                    {trek.itinerary.map((day) => {
                        const height = (day.altitude / maxAlt) * 100
                        return (
                            <div
                                key={day.day}
                                className="flex-1 flex flex-col items-center gap-1 group cursor-pointer"
                                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                            >
                                <span className="text-[10px] text-stone opacity-0 group-hover:opacity-100 transition-opacity">
                                    {day.altitude}m
                                </span>
                                <div
                                    className={`w-full rounded-t-lg transition-all duration-300 ${expandedDay === day.day ? 'bg-saffron' : 'bg-sky/30 group-hover:bg-saffron/50'
                                        }`}
                                    style={{ height: `${height}%`, minHeight: '8px' }}
                                />
                                <span className="text-[10px] text-stone">D{day.day}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Timeline */}
            <div className="relative">
                <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-glacier" />

                {trek.itinerary.map((day) => (
                    <div key={day.day} className="relative pl-14 pb-6">
                        {/* Dot */}
                        <div className={`absolute left-3 top-1 w-[14px] h-[14px] rounded-full border-2 transition-colors ${expandedDay === day.day ? 'bg-saffron border-saffron' : 'bg-white border-sky'
                            }`} />

                        {/* Day card */}
                        <button
                            onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                            className="w-full text-left"
                        >
                            <div className={`p-5 rounded-xl border transition-all duration-300 ${expandedDay === day.day
                                    ? 'bg-white border-saffron/20 shadow-lg shadow-saffron/5'
                                    : 'bg-white/50 border-glacier hover:border-saffron/20'
                                }`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-bold text-saffron tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>
                                            DAY {day.day}
                                        </span>
                                        <h4 className="font-bold text-peak text-sm md:text-base" style={{ fontFamily: 'var(--font-display)' }}>
                                            {day.title}
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="hidden sm:flex items-center gap-1 text-xs text-stone">
                                            <Mountain className="w-3 h-3" />
                                            {day.altitude}m
                                        </span>
                                        <ChevronDown className={`w-4 h-4 text-stone transition-transform ${expandedDay === day.day ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expandedDay === day.day && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-sm text-stone leading-relaxed">{day.description}</p>
                                            <div className="mt-3 flex gap-4 text-xs text-stone">
                                                <span>📍 Altitude: {day.altitude}m</span>
                                                <span>🥾 Distance: {day.distance} km</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
