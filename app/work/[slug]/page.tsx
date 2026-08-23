import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProject } from '@/data/projects'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CaseStudy } from '@/components/case-study'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project not found' }

  return {
    title: `${project.name} — Case Study`,
    description: project.overview,
    openGraph: {
      title: `${project.name} — Case Study`,
      description: project.overview,
      images: [{ url: project.cover }],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <>
      <Navbar />
      <main>
        <CaseStudy project={project} />
      </main>
      <Footer />
    </>
  )
}
