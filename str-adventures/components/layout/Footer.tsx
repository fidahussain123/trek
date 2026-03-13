import Link from 'next/link'
import { Mountain, Instagram, Youtube, Facebook, MessageCircle, Send } from 'lucide-react'

const kashmirTreks = [
    { name: 'Kashmir Great Lakes', href: '/treks/great-lakes-kashmir' },
    { name: 'Tarsar Marsar', href: '/treks/tarsar-marsar' },
    { name: 'Kolahoi Glacier', href: '/treks/kolahoi-glacier' },
    { name: 'Pinnacle Peak Base Camp', href: '/treks/pinnacle-peak-base-camp' },
]

const ladakhTreks = [
    { name: 'Markha Valley', href: '/treks/markha-valley' },
    { name: 'Chadar Trek', href: '/treks/chadar-trek' },
    { name: 'Zanskar Traverse', href: '/treks/zanskar-valley-traverse' },
    { name: 'Stok Kangri', href: '/treks/stok-kangri' },
]

const quickLinks = [
    { name: 'All Treks', href: '/treks' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Kashmir Region', href: '/regions/kashmir' },
    { name: 'Ladakh Region', href: '/regions/ladakh' },
]

export default function Footer() {
    return (
        <footer className="bg-peak text-white">
            {/* Newsletter Section */}
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                                Join the Summit Club
                            </h3>
                            <p className="mt-2 text-white/60 max-w-md">
                                Get exclusive trek updates, early bird offers, and stories from the Himalayas.
                            </p>
                        </div>
                        <div className="flex w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 md:w-80 px-5 py-3.5 bg-white/5 border border-white/10 rounded-l-lg text-white placeholder:text-white/30 focus:outline-none focus:border-saffron/50 transition-colors"
                            />
                            <button className="px-6 py-3.5 bg-saffron hover:bg-saffron/90 rounded-r-lg transition-colors flex items-center gap-2 font-medium">
                                <Send className="w-4 h-4" />
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3">
                            <Mountain className="w-8 h-8 text-saffron" />
                            <div className="flex flex-col">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>STR</span>
                                    <span className="text-[10px] tracking-[0.3em] text-white/70 uppercase" style={{ fontFamily: 'var(--font-mono)' }}>Adventures</span>
                                </div>
                                <span className="text-[9px] tracking-[0.25em] text-gold/80 uppercase" style={{ fontFamily: 'var(--font-mono)' }}>Sky · Terrain · Rapids</span>
                            </div>
                        </Link>
                        <p className="mt-6 text-white/50 text-sm leading-relaxed max-w-sm">
                            Kashmir & Ladakh&apos;s premier trekking company. We craft unforgettable Himalayan experiences with expert local guides, small groups, and a deep commitment to responsible travel.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {[
                                { icon: Instagram, label: 'Instagram' },
                                { icon: Youtube, label: 'YouTube' },
                                { icon: Facebook, label: 'Facebook' },
                                { icon: MessageCircle, label: 'WhatsApp' },
                            ].map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-saffron/20 hover:text-saffron flex items-center justify-center text-white/50 transition-all duration-300"
                                >
                                    <Icon className="w-4.5 h-4.5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-white/60 hover:text-saffron transition-colors duration-200">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kashmir Treks */}
                    <div>
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-5">Kashmir Treks</h4>
                        <ul className="space-y-3">
                            {kashmirTreks.map((trek) => (
                                <li key={trek.href}>
                                    <Link href={trek.href} className="text-sm text-white/60 hover:text-saffron transition-colors duration-200">
                                        {trek.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ladakh Treks */}
                    <div>
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-5">Ladakh Treks</h4>
                        <ul className="space-y-3">
                            {ladakhTreks.map((trek) => (
                                <li key={trek.href}>
                                    <Link href={trek.href} className="text-sm text-white/60 hover:text-saffron transition-colors duration-200">
                                        {trek.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30">
                        © {new Date().getFullYear()} STR Adventures. All rights reserved.
                    </p>
                    <p className="text-xs text-white/30">
                        Made with ❤️ in Kashmir
                    </p>
                </div>
            </div>
        </footer>
    )
}
