'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Mountain } from 'lucide-react'
import Button from '@/components/ui/Button'

const navLinks = [
    {
        label: 'Treks',
        href: '/treks',
        submenu: [
            { label: 'All Treks', href: '/treks' },
            { label: 'Kashmir Great Lakes', href: '/treks/great-lakes-kashmir' },
            { label: 'Tarsar Marsar', href: '/treks/tarsar-marsar' },
            { label: 'Chadar Trek', href: '/treks/chadar-trek' },
            { label: 'Markha Valley', href: '/treks/markha-valley' },
            { label: 'Stok Kangri', href: '/treks/stok-kangri' },
        ],
    },
    {
        label: 'Regions',
        href: '#',
        submenu: [
            { label: 'Kashmir', href: '/regions/kashmir' },
            { label: 'Ladakh', href: '/regions/ladakh' },
        ],
    },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [mobileOpen])

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? 'bg-peak/95 backdrop-blur-xl shadow-lg shadow-black/10'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <Mountain className="w-8 h-8 text-saffron group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
                                        STR
                                    </span>
                                    <span className="text-[10px] font-medium tracking-[0.3em] text-white/70 uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
                                        Adventures
                                    </span>
                                </div>
                                <span className="text-[9px] tracking-[0.25em] text-gold/80 uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
                                    Sky · Terrain · Rapids
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.label}
                                    className="relative group"
                                    onMouseEnter={() => setActiveSubmenu(link.label)}
                                    onMouseLeave={() => setActiveSubmenu(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
                                    >
                                        {link.label}
                                        {link.submenu && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
                                    </Link>

                                    {/* Dropdown */}
                                    {link.submenu && (
                                        <AnimatePresence>
                                            {activeSubmenu === link.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 mt-1 min-w-[220px] bg-peak/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden"
                                                >
                                                    {link.submenu.map((sub) => (
                                                        <Link
                                                            key={sub.href}
                                                            href={sub.href}
                                                            className="block px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA + Hamburger */}
                        <div className="flex items-center gap-4">
                            <Link href="/contact" className="hidden lg:block">
                                <Button variant="primary" size="sm">
                                    Book a Trek
                                </Button>
                            </Link>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-peak/98 backdrop-blur-2xl flex flex-col pt-24 px-6"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {link.submenu ? (
                                        <div>
                                            <button
                                                onClick={() =>
                                                    setActiveSubmenu(activeSubmenu === link.label ? null : link.label)
                                                }
                                                className="flex items-center justify-between w-full py-4 text-2xl font-medium text-white/90 border-b border-white/10"
                                            >
                                                {link.label}
                                                <ChevronDown
                                                    className={`w-5 h-5 transition-transform ${activeSubmenu === link.label ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {activeSubmenu === link.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="py-2 pl-4 flex flex-col gap-1">
                                                            {link.submenu.map((sub) => (
                                                                <Link
                                                                    key={sub.href}
                                                                    href={sub.href}
                                                                    onClick={() => setMobileOpen(false)}
                                                                    className="py-2 text-lg text-white/60 hover:text-saffron transition-colors"
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block py-4 text-2xl font-medium text-white/90 border-b border-white/10 hover:text-saffron transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                        >
                            <Link href="/contact" onClick={() => setMobileOpen(false)}>
                                <Button variant="primary" size="lg" className="w-full">
                                    Book a Trek
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto pb-8 text-center"
                        >
                            <p className="text-sm text-white/40" style={{ fontFamily: 'var(--font-mono)' }}>
                                SKY · TERRAIN · RAPIDS
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
