import { EXPERIENCE } from '@/lib/data'
import { notFound } from 'next/navigation'
import ExperienceDetail from '@/components/ExperienceDetail'

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function ExperiencePage({ params }: PageProps) {
    const { slug } = await params
    const experience = EXPERIENCE.find(exp => exp.slug === slug)

    if (!experience) {
        notFound()
    }

    return <ExperienceDetail experience={experience} />
}
