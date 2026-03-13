export interface Region {
    id: string
    name: string
    slug: string
    tagline: string
    description: string
    image: string
    trekCount: number
    highlights: string[]
    bestTime: string
    baseCity: string
}

export const regions: Region[] = [
    {
        id: 'kashmir',
        name: 'Kashmir',
        slug: 'kashmir',
        tagline: 'The Paradise on Earth',
        description: 'Kashmir is a land of enchanting beauty — alpine lakes that mirror the sky, vast meadows carpeted in wildflowers, ancient forests of pine and deodar, and snow-capped peaks that pierce the heavens. Every trek here is a journey through paradise itself.',
        image: 'https://images.unsplash.com/photo-1626621331169-5f34be280ed9?auto=format&fit=crop&w=1920&q=80',
        trekCount: 4,
        highlights: ['Glacial Lakes', 'Alpine Meadows', 'Pine Forests', 'Flower Valleys', 'Glacier Expeditions'],
        bestTime: 'June – September',
        baseCity: 'Srinagar',
    },
    {
        id: 'ladakh',
        name: 'Ladakh',
        slug: 'ladakh',
        tagline: 'The High Desert',
        description: 'Ladakh is the land beyond the passes — a stark, haunting landscape of barren mountains, ancient monasteries perched on clifftops, frozen rivers, and air so clear you can see forever. Trekking here is an expedition into one of Earth\'s last great wildernesses.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80',
        trekCount: 4,
        highlights: ['High Passes (5000m+)', 'Ancient Monasteries', 'Frozen Rivers', 'Moon Landscapes', 'Summit Expeditions'],
        bestTime: 'June – September (Winter: Jan–Feb for Chadar)',
        baseCity: 'Leh',
    },
]

export const getRegionBySlug = (slug: string) => regions.find(r => r.slug === slug)
