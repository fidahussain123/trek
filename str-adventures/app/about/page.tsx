import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import StatsCounter from '@/components/home/StatsCounter'
import { Mountain, Users, Award, Globe } from 'lucide-react'

export const metadata: Metadata = {
    title: 'About STR Adventures | Our Story',
    description: 'Learn about STR Adventures — Kashmir & Ladakh\'s premier trekking company. Expert local guides, small groups, and eco-responsible operations since 2018.',
}

const team = [
    { name: 'Fida Hussain', role: 'Founder & Lead Guide', bio: 'Born in the Kashmir Valley, 15+ years guiding in the Himalayas.', avatar: 'FH' },
    { name: 'Tenzin Norbu', role: 'Ladakh Operations Head', bio: 'Native Ladakhi, expert in high-altitude expeditions and winter treks.', avatar: 'TN' },
    { name: 'Meera Sharma', role: 'Trek Coordinator', bio: 'Ensures every trek runs smoothly from booking to summit and back.', avatar: 'MS' },
    { name: 'Raza Khan', role: 'Safety Officer', bio: 'Wilderness First Responder certified. Your safety is his mission.', avatar: 'RK' },
]

const values = [
    { icon: Mountain, title: 'Authentic Experiences', desc: 'Every route is scouted by locals who grew up in these mountains.' },
    { icon: Users, title: 'Community First', desc: 'We employ local porters, cooks, and guides — putting money back into mountain communities.' },
    { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards of safety, comfort, and client service.' },
    { icon: Globe, title: 'Sustainability', desc: 'Leave No Trace certified. We carry out every piece of waste and invest in reforestation.' },
]

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-peak overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1920&q=80"
                        alt="Mountain backdrop"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <span className="inline-block px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/20 rounded-full mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
                            Our Story
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                            Born in the <span className="italic text-saffron">Mountains</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
                            STR Adventures was founded in 2018 by a team of Kashmiri and Ladakhi mountaineers
                            who wanted to share their homeland with the world — responsibly, authentically, and unforgettably.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 bg-snow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
                                    alt="STR team in the mountains"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-peak mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                    What <span className="italic text-saffron">STR</span> Stands For
                                </h2>
                                <div className="space-y-6">
                                    <div className="p-5 bg-white rounded-xl border border-glacier">
                                        <h3 className="text-lg font-bold text-saffron mb-2">S — Sky</h3>
                                        <p className="text-stone text-sm">High-altitude passes, stargazing camps under crystal-clear Himalayan skies, and sunrise summits above the clouds.</p>
                                    </div>
                                    <div className="p-5 bg-white rounded-xl border border-glacier">
                                        <h3 className="text-lg font-bold text-saffron mb-2">T — Terrain</h3>
                                        <p className="text-stone text-sm">Glaciers, alpine meadows, deep valleys, moon landscapes, and canyons — the most diverse terrain on Earth.</p>
                                    </div>
                                    <div className="p-5 bg-white rounded-xl border border-glacier">
                                        <h3 className="text-lg font-bold text-saffron mb-2">R — Rapids</h3>
                                        <p className="text-stone text-sm">River crossings, frozen river walks, gorge treks, and the raw power of Himalayan waterways.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-glacier">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-peak" style={{ fontFamily: 'var(--font-display)' }}>
                                Our <span className="italic text-saffron">Values</span>
                            </h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <ScrollReveal key={v.title} delay={i * 0.1}>
                                <div className="p-8 bg-white rounded-2xl border border-glacier text-center hover:shadow-xl transition-shadow duration-500">
                                    <v.icon className="w-10 h-10 text-saffron mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-peak mb-3" style={{ fontFamily: 'var(--font-display)' }}>{v.title}</h3>
                                    <p className="text-sm text-stone">{v.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <StatsCounter />

            {/* Team */}
            <section className="py-20 bg-snow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-peak" style={{ fontFamily: 'var(--font-display)' }}>
                                Meet the <span className="italic text-saffron">Team</span>
                            </h2>
                            <p className="mt-4 text-stone">The mountain people behind your adventure.</p>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <ScrollReveal key={member.name} delay={i * 0.1}>
                                <div className="text-center">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-white">{member.avatar}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-peak" style={{ fontFamily: 'var(--font-display)' }}>{member.name}</h3>
                                    <p className="text-saffron text-sm font-medium mb-2">{member.role}</p>
                                    <p className="text-stone text-sm">{member.bio}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
