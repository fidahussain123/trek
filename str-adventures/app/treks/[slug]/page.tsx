import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { treks, getTrekBySlug } from '@/lib/data/treks'
import TrekDetailContent from './TrekDetailContent'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return treks.map((trek) => ({
        slug: trek.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const trek = getTrekBySlug(slug)
    if (!trek) return { title: 'Trek Not Found' }

    return {
        title: `${trek.name} Trek | STR Adventures`,
        description: trek.tagline,
        openGraph: {
            title: `${trek.name} — STR Adventures`,
            description: trek.tagline,
            images: [trek.images.hero],
        },
    }
}

export default async function TrekDetailPage({ params }: Props) {
    const { slug } = await params
    const trek = getTrekBySlug(slug)
    if (!trek) notFound()

    return <TrekDetailContent trek={trek} />
}
