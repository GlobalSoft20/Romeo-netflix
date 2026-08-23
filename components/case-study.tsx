import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  GitBranch,
  ExternalLink,
  Check,
} from 'lucide-react'
import type { Project } from '@/data/projects'
import { Reveal } from '@/components/reveal'

function Block({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <Reveal className="grid gap-3 border-t border-border py-8 md:grid-cols-12 md:gap-8">
      <h2 className="font-mono text-xs uppercase tracking-widest text-primary md:col-span-3">
        {label}
      </h2>
      <div className="md:col-span-9">{children}</div>
    </Reveal>
  )
}

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All Work
          </Link>
        </Reveal>

        <Reveal delay={60} className="mt-8 flex flex-wrap items-center gap-3">
          <span className="bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {project.type}
          </span>
          <span className="font-mono text-sm text-muted-foreground">
            {project.category} · {project.year}
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            {project.name}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            {project.tagline}
          </p>
        </Reveal>

        {(project.links?.live || project.links?.github) && (
          <Reveal delay={180} className="mt-6 flex flex-wrap gap-3">
            {project.links?.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            ) : null}
            {project.links?.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
            ) : null}
          </Reveal>
        )}

        <Reveal delay={160} className="mt-10 overflow-hidden border border-border">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.cover || '/placeholder.svg'}
              alt={`${project.name} — ${project.tagline}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-12">
          <Block label="Overview">
            <p className="text-pretty text-lg leading-relaxed">
              {project.overview}
            </p>
          </Block>

          <Block label="Problem">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {project.problem}
            </p>
          </Block>

          <Block label="Solution">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {project.solution}
            </p>
          </Block>

          <Block label="Features">
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Technologies">
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="border border-border px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Block>

          <Block label="My Role">
            <p className="font-display text-lg font-semibold">{project.role}</p>
          </Block>

          <Block label="Challenges">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {project.challenges}
            </p>
          </Block>

          <Block label="Result">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {project.result}
            </p>
          </Block>

          {project.screenshots.length > 1 ? (
            <Block label="Screenshots">
              <div className="grid gap-4">
                {project.screenshots.map((shot) => (
                  <div
                    key={shot.src}
                    className="relative aspect-[16/9] w-full overflow-hidden border border-border"
                  >
                    <Image
                      src={shot.src || '/placeholder.svg'}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 900px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Block>
          ) : null}
        </div>

        <Reveal className="mt-14 flex flex-col items-start gap-6 border-t border-border pt-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold">
              Have a similar project?
            </p>
            <p className="mt-1 text-muted-foreground">
              Let&apos;s build something practical together.
            </p>
          </div>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </article>
  )
}
