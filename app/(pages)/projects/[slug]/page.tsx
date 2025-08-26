import { PROJECTS } from '@/lib/data'
import { notFound } from 'next/navigation'
import ProjectDetail from '@/components/ProjectDetail'

interface Params {
    params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: Params) {
    const { slug } = await params
    const project = PROJECTS.find(p => p.slug === slug)
    if (!project) return notFound()

    return <ProjectDetail project={project} />
}