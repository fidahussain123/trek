'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { Mountain, Users, Leaf, HeartPulse } from 'lucide-react'

const features = [
    {
        icon: Mountain,
        title: 'Expert Local Guides',
        description: 'Our guides are born and raised in Kashmir & Ladakh. They know every trail, every pass, every hidden campsite. Trek with the people who call these mountains home.',
        color: 'text-saffron',
        bg: 'bg-saffron/5',
    },
    {
        icon: Users,
        title: 'Small Groups',
        description: 'Maximum 20 trekkers per batch. We believe the mountains are best experienced in intimate groups — more personal attention, less environmental impact.',
        color: 'text-sky',
        bg: 'bg-sky/5',
    },
    {
        icon: Leaf,
        title: 'Leave No Trace',
        description: 'Certified eco-responsible operations. We carry out every piece of waste, use solar-powered camps, and contribute to local reforestation projects.',
        color: 'text-pine',
        bg: 'bg-pine/5',
    },
    {
        icon: HeartPulse,
        title: 'Safety First',
        description: 'All guides are Wilderness First Responder certified. We carry satellite phones, oxygen cylinders, and comprehensive first-aid on every trek.',
        color: 'text-red-500',
        bg: 'bg-red-500/5',
    },
]

export default function WhySTR() {
    return (
        <section className="py-24 bg-snow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-saffron border border-saffron/20 rounded-full mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-peak" style={{ fontFamily: 'var(--font-display)' }}>
                            The STR
                            <span className="italic text-saffron"> Difference</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <ScrollReveal key={feature.title} delay={i * 0.1}>
                            <div className="group p-8 rounded-2xl bg-white hover:bg-peak transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-peak/10 border border-glacier hover:border-transparent">
                                <div className={`w-14 h-14 ${feature.bg} group-hover:bg-white/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500`}>
                                    <feature.icon className={`w-7 h-7 ${feature.color} group-hover:text-saffron transition-colors duration-500`} />
                                </div>
                                <h3 className="text-lg font-bold text-peak group-hover:text-white mb-3 transition-colors duration-500" style={{ fontFamily: 'var(--font-display)' }}>
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-stone group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                                    {feature.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
