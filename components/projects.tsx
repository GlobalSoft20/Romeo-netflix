import { otherProjects } from '@/data/projects'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { ProjectCard } from '@/components/project-card'

export function Projects() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="More Work"
          title="Selected projects."
          description="A range of business systems and platforms — including academic and prototype work — built to solve specific, real-world problems."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {otherProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
