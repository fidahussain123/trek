'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface TrekGalleryProps {
    images: string[]
    trekName: string
}

export default function TrekGallery({ images, trekName }: TrekGalleryProps) {
    const [lightbox, setLightbox] = useState<number | null>(null)

    const openNext = () => {
        if (lightbox !== null) setLightbox((lightbox + 1) % images.length)
    }

    const openPrev = () => {
        if (lightbox !== null) setLightbox((lightbox - 1 + images.length) % images.length)
    }

    return (
        <div>
            <h2 className="text-2xl md:text-3xl font-bold text-peak mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                Trek <span className="italic text-saffron">Gallery</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className={`relative cursor-pointer rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2 h-[300px] md:h-[400px]' : 'h-[180px] md:h-[200px]'
                            }`}
                        onClick={() => setLightbox(i)}
                    >
                        <Image
                            src={img}
                            alt={`${trekName} - Photo ${i + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300" />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                        onClick={() => setLightbox(null)}
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setLightbox(null) }}
                            className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); openPrev() }}
                            className="absolute left-4 md:left-8 text-white/70 hover:text-white z-10"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); openNext() }}
                            className="absolute right-4 md:right-8 text-white/70 hover:text-white z-10"
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>

                        <motion.div
                            key={lightbox}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-[90vw] h-[80vh] max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[lightbox]}
                                alt={`${trekName} - Photo ${lightbox + 1}`}
                                fill
                                className="object-contain"
                                sizes="90vw"
                            />
                        </motion.div>

                        <div className="absolute bottom-6 text-white/50 text-sm">
                            {lightbox + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}
