'use client'

import { useState, useMemo } from 'react'
import { treks } from '@/lib/data/treks'
import TrekCard from '@/components/trek/TrekCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { SlidersHorizontal, X, Search, ChevronDown } from 'lucide-react'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const fullMonths: Record<string, string> = {
    Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April',
    May: 'May', Jun: 'June', Jul: 'July', Aug: 'August',
    Sep: 'September', Oct: 'October', Nov: 'November', Dec: 'December',
}
const difficulties = ['Easy', 'Moderate', 'Difficult', 'Extreme'] as const

export default function TreksPage() {
    const [region, setRegion] = useState<string>('all')
    const [difficulty, setDifficulty] = useState<string>('all')
    const [selectedMonth, setSelectedMonth] = useState<string>('')
    const [sortBy, setSortBy] = useState<string>('popular')
    const [showFilters, setShowFilters] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const filteredTreks = useMemo(() => {
        let result = [...treks]

        if (searchQuery) {
            result = result.filter(t =>
                t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                t.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            )
        }

        if (region !== 'all') result = result.filter(t => t.region === region)
        if (difficulty !== 'all') result = result.filter(t => t.difficulty === difficulty)
        if (selectedMonth) result = result.filter(t => t.bestMonths.includes(fullMonths[selectedMonth]))

        switch (sortBy) {
            case 'price-low': result.sort((a, b) => a.price - b.price); break
            case 'price-high': result.sort((a, b) => b.price - a.price); break
            case 'duration': result.sort((a, b) => a.duration - b.duration); break
            case 'rating': result.sort((a, b) => b.rating - a.rating); break
            default: result.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0)); break
        }

        return result
    }, [region, difficulty, selectedMonth, sortBy, searchQuery])

    const activeFilterCount = [
        region !== 'all' ? 1 : 0,
        difficulty !== 'all' ? 1 : 0,
        selectedMonth ? 1 : 0,
    ].reduce((a, b) => a + b, 0)

    const clearFilters = () => {
        setRegion('all')
        setDifficulty('all')
        setSelectedMonth('')
        setSearchQuery('')
    }

    return (
        <>
            {/* Hero Banner */}
            <section className="relative pt-32 pb-16 bg-peak">
                <div className="absolute inset-0 bg-gradient-to-b from-peak via-peak/95 to-peak" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <p className="text-saffron text-sm tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                            Explore Our Collection
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            All <span className="italic text-saffron">Treks</span>
                        </h1>
                        <p className="text-white/50 max-w-xl">
                            {treks.length} handpicked routes across Kashmir & Ladakh. Find your perfect Himalayan adventure.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Filters + Grid */}
            <section className="py-12 bg-snow min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top Bar */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                        {/* Search */}
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone" />
                            <input
                                type="text"
                                placeholder="Search treks..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white border border-glacier rounded-xl text-sm focus:outline-none focus:border-saffron/50 transition-colors"
                            />
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto">
                            {/* Filter toggle (mobile) */}
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white border border-glacier rounded-xl text-sm font-medium hover:border-saffron/30 transition-colors"
                            >
                                <SlidersHorizontal className="w-4 h-4" />
                                Filters
                                {activeFilterCount > 0 && (
                                    <span className="w-5 h-5 rounded-full bg-saffron text-white text-xs flex items-center justify-center">{activeFilterCount}</span>
                                )}
                            </button>

                            {/* Sort */}
                            <div className="relative flex-1 md:flex-none">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full md:w-48 appearance-none px-4 py-3 pr-10 bg-white border border-glacier rounded-xl text-sm focus:outline-none focus:border-saffron/50 cursor-pointer"
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="price-low">Price: Low → High</option>
                                    <option value="price-high">Price: High → Low</option>
                                    <option value="duration">Duration: Shortest</option>
                                    <option value="rating">Highest Rated</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-8">
                        {/* Sidebar Filters (desktop always, mobile toggle) */}
                        <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 shrink-0`}>
                            <div className="sticky top-24 space-y-6 p-6 bg-white rounded-2xl border border-glacier">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-peak" style={{ fontFamily: 'var(--font-display)' }}>Filters</h3>
                                    {activeFilterCount > 0 && (
                                        <button onClick={clearFilters} className="text-xs text-saffron hover:underline flex items-center gap-1">
                                            <X className="w-3 h-3" /> Clear all
                                        </button>
                                    )}
                                </div>

                                {/* Region */}
                                <div>
                                    <h4 className="text-xs font-semibold text-stone uppercase tracking-wider mb-3">Region</h4>
                                    <div className="flex flex-col gap-2">
                                        {['all', 'kashmir', 'ladakh'].map((r) => (
                                            <button
                                                key={r}
                                                onClick={() => setRegion(r)}
                                                className={`text-left px-3 py-2 rounded-lg text-sm transition-all ${region === r ? 'bg-saffron/10 text-saffron font-medium' : 'text-stone hover:bg-glacier'
                                                    }`}
                                            >
                                                {r === 'all' ? 'All Regions' : r.charAt(0).toUpperCase() + r.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Difficulty */}
                                <div>
                                    <h4 className="text-xs font-semibold text-stone uppercase tracking-wider mb-3">Difficulty</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setDifficulty('all')}
                                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${difficulty === 'all' ? 'bg-saffron text-white' : 'bg-glacier text-stone hover:bg-saffron/10'
                                                }`}
                                        >
                                            All
                                        </button>
                                        {difficulties.map((d) => (
                                            <button
                                                key={d}
                                                onClick={() => setDifficulty(d)}
                                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${difficulty === d ? 'bg-saffron text-white' : 'bg-glacier text-stone hover:bg-saffron/10'
                                                    }`}
                                            >
                                                {d}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Month */}
                                <div>
                                    <h4 className="text-xs font-semibold text-stone uppercase tracking-wider mb-3">Best Month</h4>
                                    <div className="grid grid-cols-4 gap-1.5">
                                        {months.map((m) => (
                                            <button
                                                key={m}
                                                onClick={() => setSelectedMonth(selectedMonth === m ? '' : m)}
                                                className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedMonth === m
                                                        ? 'bg-saffron text-white'
                                                        : 'bg-glacier text-stone hover:bg-saffron/10'
                                                    }`}
                                            >
                                                {m}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Trek Grid */}
                        <div className="flex-1">
                            {filteredTreks.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {filteredTreks.map((trek, i) => (
                                        <ScrollReveal key={trek.id} delay={i * 0.05}>
                                            <TrekCard trek={trek} />
                                        </ScrollReveal>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-24">
                                    <div className="text-6xl mb-4">🏔️</div>
                                    <h3 className="text-xl font-bold text-peak mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                        No treks found
                                    </h3>
                                    <p className="text-stone mb-6">
                                        Try adjusting your filters to discover more adventures.
                                    </p>
                                    <button
                                        onClick={clearFilters}
                                        className="px-6 py-3 bg-saffron text-white rounded-xl font-medium hover:bg-saffron/90 transition-colors"
                                    >
                                        Clear All Filters
                                    </button>
                                </div>
                            )}

                            {filteredTreks.length > 0 && (
                                <p className="mt-8 text-center text-sm text-stone">
                                    Showing {filteredTreks.length} of {treks.length} treks
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
