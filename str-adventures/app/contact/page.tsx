'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react'

const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: Mail, label: 'Email', value: 'hello@stradventures.in', href: 'mailto:hello@stradventures.in' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/919876543210' },
    { icon: MapPin, label: 'Office', value: 'Residency Road, Srinagar, J&K 190001', href: '#' },
    { icon: Clock, label: 'Hours', value: 'Mon–Sat, 9AM–7PM IST', href: '#' },
]

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 bg-peak">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <span className="inline-block px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/20 rounded-full mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
                            Get in Touch
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            Let&apos;s Plan Your <span className="italic text-saffron">Adventure</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-xl">
                            Have questions about a trek? Want to book a custom expedition? We&apos;re here to help.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-snow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <ScrollReveal>
                                <h2 className="text-2xl font-bold text-peak mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                                    Reach <span className="italic text-saffron">Us</span>
                                </h2>
                                <div className="space-y-4">
                                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            className="flex items-start gap-4 p-4 bg-white rounded-xl border border-glacier hover:border-saffron/20 transition-all duration-300 group"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0 group-hover:bg-saffron/20 transition-colors">
                                                <Icon className="w-5 h-5 text-saffron" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-stone uppercase tracking-wider mb-0.5">{label}</p>
                                                <p className="text-sm font-medium text-peak">{value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <ScrollReveal delay={0.2}>
                                <div className="p-8 md:p-10 bg-white rounded-2xl border border-glacier shadow-sm">
                                    <h2 className="text-2xl font-bold text-peak mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                        Send Us a <span className="italic text-saffron">Message</span>
                                    </h2>
                                    <p className="text-stone text-sm mb-8">Fill in the form and we&apos;ll get back to you within 24 hours.</p>

                                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="name" className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
                                                    Full Name
                                                </label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    placeholder="Your name"
                                                    className="w-full px-4 py-3 bg-snow border border-glacier rounded-xl text-sm focus:outline-none focus:border-saffron/50 transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    placeholder="you@email.com"
                                                    className="w-full px-4 py-3 bg-snow border border-glacier rounded-xl text-sm focus:outline-none focus:border-saffron/50 transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="phone" className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
                                                    Phone
                                                </label>
                                                <input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="+91 XXXXX XXXXX"
                                                    className="w-full px-4 py-3 bg-snow border border-glacier rounded-xl text-sm focus:outline-none focus:border-saffron/50 transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="trek" className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
                                                    Interested Trek
                                                </label>
                                                <select
                                                    id="trek"
                                                    className="w-full px-4 py-3 bg-snow border border-glacier rounded-xl text-sm focus:outline-none focus:border-saffron/50 transition-colors"
                                                >
                                                    <option value="">Select a trek</option>
                                                    <option>Kashmir Great Lakes</option>
                                                    <option>Tarsar Marsar</option>
                                                    <option>Kolahoi Glacier</option>
                                                    <option>Pinnacle Peak Base Camp</option>
                                                    <option>Markha Valley</option>
                                                    <option>Chadar Trek</option>
                                                    <option>Zanskar Valley Traverse</option>
                                                    <option>Stok Kangri</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={5}
                                                placeholder="Tell us about your plans, group size, preferred dates..."
                                                className="w-full px-4 py-3 bg-snow border border-glacier rounded-xl text-sm focus:outline-none focus:border-saffron/50 transition-colors resize-none"
                                            />
                                        </div>

                                        <Button variant="primary" size="lg" className="w-full md:w-auto">
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </Button>
                                    </form>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
