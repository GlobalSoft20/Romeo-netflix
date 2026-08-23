import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col overflow-hidden border border-border bg-card transition-colors hover:border-primary"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.cover || '/placeholder.svg'}
          alt={`${project.name} — ${project.tagline}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/20" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            {project.category}
          </span>
          <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {project.type}
          </span>
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold transition-colors group-hover:text-primary">
            {project.name}
          </h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="border border-border px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
